import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { VERIFY_USER } from "./graphql/mutations";

const cache = new InMemoryCache({
  dataIdFromObject: object => object._id || null
});

persistCache({
  cache,
  storage: window.localStorage
});

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === "production"  ?
    "https://handlebar-store.herokuapp.com/graphql" :
    "http://localhost:5000/graphql",
  headers:  {
    authorization: localStorage.getItem("auth-token")
  }
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

const token = localStorage.getItem("auth-token");

cache.writeData({
  data: {
    isLoggedIn: Boolean(token)
  }
});

if (!cache.data.data.ROOT_QUERY.cart) {
  cache.writeData({
    data: {
      cart: []
    }
  });
}

if (token) {
  client
    .mutate({ mutation: VERIFY_USER, variables: { token } })
    .then(({ data }) => {
      cache.writeData({
        data: {
          isLoggedIn: data.verifyUser.loggedIn,
        }
      });
    });
} else {
  cache.writeData({
    data: {
      isLoggedIn: false,
    }
  });
}

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
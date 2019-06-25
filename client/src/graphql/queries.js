import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const FETCH_PRODUCTS = gql`
  query FetchProducts {
    products {
      _id
      name
      description
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query FetchProduct($id: ID!) {
    product(_id: $id) {
      name
      description
      weight
    }
  }
`;
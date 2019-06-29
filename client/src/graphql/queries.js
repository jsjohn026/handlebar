import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      _id
      name
    }
  }
`;

export const FETCH_PRODUCTS = gql`
  query FetchProducts {
    products {
      _id
      name
      genre {
        name
      }
      description
      price
      image_url
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query FetchProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      genre {
        name
      }
      description
      owner {
        name
        _id
      }
      price
      image_url
    }
  }
`;
// options:{
//   context: {
//     headers: {
//       authorization: localStorage.getItem("auth-token")
//     }
//   }
// }


export const FETCH_GENRE = gql`
  query FetchGenre($id: ID!) {
    genre(_id: $id) {
      _id
      name
      products {
        _id
        name
        description
        price
        image_url
        genre {
          name
        }
      }
    }
  }
`;

export const FETCH_GENRES = gql`
  query FetchGenres {
    genres {
      _id
      name
      image_url
    }
  }
`;

export const FETCH_CART_ITEMS = gql`
  query FetchCartItems {
    cart @client
  }
`;
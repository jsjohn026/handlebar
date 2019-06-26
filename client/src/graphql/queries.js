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
      }
      price
      image_url
    }
  }
`;

export const FETCH_GENRE_PRODUCTS = gql`
  query FetchGenreProducts($id: ID!) {
    genre(_id: $id) {
      _id
      name
      products {
        _id
        name
        description
        price
        image_url
      }
    }
  }
`;
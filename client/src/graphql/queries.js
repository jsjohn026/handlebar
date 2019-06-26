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

export const FETCH_GENRES = gql`
  query FetchGenres {
    genres {
      _id
      name
      image_url
      products{
        name
        _id
      }
    }
  }
`;

export const FETCH_GENRE = gql`
  query FetchGenre($id: ID!) {
    genre(_id: $id){
      name
      products{
        _id
        name
        price
        image_url
      }
    }
  }
`;
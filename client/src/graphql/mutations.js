import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql`
  mutation NewUser($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      name,
      email,
      token,
      loggedIn
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $description: String!, $image_url: String!, $price: Float!, $genre: ID!) {
    newProduct(name: $name, description: $description, image_url: $image_url, price: $price, genre: $genre) {
      name
      description
      image_url
      price
      genre {
        _id
        name
      }
      owner {
        _id
        name
      }
    }
  }
`;
import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
      _id
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LogoutUser($id: ID!) {
    logout(_id: $id) {
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
      _id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!){
    deleteProduct(id: $id){
      _id
      name
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

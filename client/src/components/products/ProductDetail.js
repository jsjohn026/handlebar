import React from "react";
import { Query } from "react-apollo";
import { FETCH_PRODUCT } from "../../graphql/queries";

const ProductDetail = props => {
  return (
    <Query query={FETCH_PRODUCT} variables={{ id: props.match.params.productId }} >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <div>
            {data.product.name}
            {data.product.description}
            {data.product.weight}
          </div>
        );
      }}
    </Query>
  );
};

export default ProductDetail;
import React from "react";
import { Query } from "react-apollo";
import { FETCH_PRODUCT } from "../../graphql/queries";
import "../../styles/product_detail.css";

const ProductDetail = props => {
  return (
    <Query query={FETCH_PRODUCT} variables={{ id: props.match.params.productId }} >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        console.log(data.product)
        return (
          <div className="product-detail-page">
            <div className="product-detail-image" style={{backgroundImage: `url(${data.product.image_url})`}}/>
            <div className="product-detail-body">
              <h2 className="product-detail-name">{data.product.name}</h2>
              <span className="product-detail-price">${data.product.price}</span>
              <span className="product-detail-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="product-detail-genre">{data.product.genre.name.toUpperCase()}</span>
              <p className="product-detail-description">{data.product.description}</p>
            </div>
            <div className="products-detail-buy" onClick={() => console.log("add to cart!!!")}>BUY</div>
          </div>
        );
      }}
    </Query>
  );
};

export default ProductDetail;
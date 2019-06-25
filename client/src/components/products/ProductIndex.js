import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { FETCH_PRODUCTS } from "../../graphql/queries";
import "../../styles/product_index.css";

const ProductIndex = () => {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div className="product-index-page">
            <h2>HANDLEBAR GOODS</h2>
            <ul className="product-list">
              {data.products.map(product => {
                return (<li key={product._id} className="product-list-item">
                  <Link to={`/products/${product._id}`}>
                    <div className="product-list-item-top"></div>
                    <div className="product-list-item-image" style={{backgroundImage: `url(${product.image_url})`}}/>
                    <div className="product-list-item-body">
                      <h3 className="product-list-item-name">{product.name}</h3>
                      <span className="product-list-item-price">${product.price}</span>
                      <div className="product-list-item-bottom">
                        <div className="product-list-item-row">
                          <span className="product-list-item-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                          <span className="product-list-item-genre">{product.genre.name.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>)
              })}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default ProductIndex;
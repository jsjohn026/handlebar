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
            <h2>Handlebar Goods</h2>
            <ul className="product-list">
              {data.products.map(product => {
                return (<li key={product._id} className="product-list-item">
                  <Link to={`/products/${product._id}`}>
                    <div className="product-list-item-top"></div>
                    <img src={product.image_url}/>
                    <div className="product-list-item-body">
                      <h3>{product.name}</h3>
                      <span>${product.price}</span>
                      <div className="product-list-item-bottom">
                        <div className="product-list-item-row">
                          <span>5 stars</span>
                          <span>{product.genre.name}</span>
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
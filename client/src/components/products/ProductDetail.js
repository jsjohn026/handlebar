import React from "react";
<<<<<<< HEAD
import AddToCart from "../cart/AddToCart";
=======
>>>>>>> 9bac8c10435934f70f6f63feb0bfbf47b3373a4e
import { Query, withApollo } from "react-apollo";
import { FETCH_PRODUCT, CURRENT_USER } from "../../graphql/queries";
import "../../styles/product_detail.css";
import ProductDeleteButton from './ProductDeleteButton'
class ProductDetail extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentUserId: "",
      currentUserName: ""
    }
  }

  componentWillMount(){
     this.props.client.query( { query: CURRENT_USER } )
     .then(({data}) => {
       
       this.setState({currentUserId: data.currentUser._id, currentUserName: data.currentUser.name})
     })
  }

  render(){
     return (
      <Query query={FETCH_PRODUCT} variables={{ id: this.props.match.params.productId }} >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          var val = data.product.owner._id === this.state.currentUserId;
          let showButton = val ? (
            <div>
<<<<<<< HEAD
              <ProductDeleteButton productId={data.product._id}/>
            </div>
=======
                  <ProductDeleteButton productId={data.product._id}/>
                </div>
>>>>>>> 9bac8c10435934f70f6f63feb0bfbf47b3373a4e
          ) : null;
          return (
            <div className="product-detail-page">
              <div className="product-detail-image-container">
                <div className="product-detail-image" style={{backgroundImage: `url(${data.product.image_url})`}}/>
              </div>
              <div className="product-detail-body">
                <h2 className="product-detail-name">{data.product.name.toUpperCase()}</h2>
                <span className="product-detail-price">${data.product.price.toFixed(2)}</span>
                <span className="product-detail-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="product-detail-genre">{data.product.genre.name.toUpperCase()}</span>
                <p className="product-detail-description">{data.product.description}</p>
<<<<<<< HEAD
                <AddToCart _id={data.product._id} price={data.product.price} />
=======
                <div className="product-detail-buy" onClick={() => console.log("add to cart!!!")}>BUY</div>
>>>>>>> 9bac8c10435934f70f6f63feb0bfbf47b3373a4e
                <div className="deleteButtonContainer">
                  {showButton}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(ProductDetail);
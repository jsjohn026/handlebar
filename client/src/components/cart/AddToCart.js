import React from "react";
import { Query, withApollo } from "react-apollo";
import { FETCH_CART_ITEMS } from "../../graphql/queries";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    this.props.client.query({ query: FETCH_CART_ITEMS }).then(({ data }) => {
      this.setState({ cartItems: data.cart });
    });
  }

  add() {
    const { _id, price } = this.props;
    const { cartItems } = this.state;
    const newItem = [ _id, price ];
    cartItems.push( newItem );
    this.props.client.writeData({
      data: { 
        cart: cartItems
       }
    });
    this.setState({ cartItems });
  }

  remove() {
    const { _id, price } = this.props;
    let { cartItems } = this.state;
    const removedItem = [ _id, price ];
    cartItems = cartItems.filter(cartItem => cartItem === removedItem);
    this.props.client.writeData({
      data: {
        cart: cartItems
      }
    });
    this.setState({ cartItems });
  }

  render() {
    let inCart = false;
    this.state.cartItems.forEach(cartItem => {
      if (cartItem[0] === this.props._id) inCart = true;
    });

    if (inCart) {
      return (
        <div className="product-detail-buy" onClick={this.remove}>Remove From Cart</div>
      );
    } else {
      return (
        <div className="product-detail-buy" onClick={this.add}>Add To Cart</div>
      );
    }
  }
}

export default withApollo(AddToCart);
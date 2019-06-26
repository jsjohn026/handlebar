import React from "react";

class ProductCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image_url: "",
      price: "",
      genre: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field) {
    return event => {
      
    };
  }

  handleSubmit() {

  }

  render() {

    return (
      <div>

      </div>
    );
  }
}

export default ProductCreate;
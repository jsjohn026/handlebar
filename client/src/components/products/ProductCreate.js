import React from "react";
import { withApollo, Mutation } from "react-apollo";
import { FETCH_GENRES } from "../../graphql/queries";
import { CREATE_PRODUCT } from "../../graphql/mutations";
import "../../styles/product_create.css";

class ProductCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image_url: "",
      price: "",
      genre: "",
      genres: null
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.client.query({ query: FETCH_GENRES }).then(({ data }) => {
      this.setState({ genres: data.genres });
    });
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event, createProduct) {
    event.preventDefault();
    createProduct({
      variables: {
        name: this.state.name,
        description: this.state.description,
        image_url: this.state.image_url,
        price: parseFloat(this.state.price),
        genre: this.state.genre,
      }
    });
  }
  // Disguise
  // Betty, darling, who is that handsome looking young fellow over there?
  // https://5f415b.medialib.edu.glogster.com/lWBTHR1VL9FWuG9cNdbW/media/5f/5f98b98ba503659b650aab1f61911475ea8c0b9e/groucho-glasses-by-mike44nh-d4ut2c6.png

  render() {
    let genreOptions;
    if (this.state.genres) {
      genreOptions = this.state.genres.map(genre => (
        <option key={genre._id} className="create-product-option" value={genre._id}>
          {genre.name.slice(0,1).toUpperCase() + genre.name.slice(1)}
        </option>
      ));
    }

    return (
      <Mutation mutation={CREATE_PRODUCT} onCompleted={() => this.props.history.push("/")}>
        {createProduct => {
          return (
            <div className="create-product-page">
              <div className="create-product-form-container">
                <h1 className="create-product-header">Add Listing</h1>
                <form className="create-product-form" onSubmit={event => this.handleSubmit(event, createProduct)}>
                  <div className="create-product-title-container">
                    <h2 className="create-product-form-header">Title</h2>
                    <p className="create-product-main-info">Use words that people would search for when looking for your item</p>
                    <input className="create-product-input" value={this.state.name} onChange={this.updateInput("name")}/>
                    <p className="create-product-light-info">Need some inspiration? Include details such as brand, color, size, specs, condition, etc.</p>
                  </div>
                  <div className="create-product-image_url-container">
                    <h2 className="create-product-form-header">Add a photo</h2>
                    <p className="create-product-main-info">Get people excited in your item! (Make sure it's a good photo!)</p>
                    <input className="create-product-input" value={this.state.image_url} onChange={this.updateInput("image_url")}/>
                    <p className="create-product-light-info">No pressure...</p>
                  </div>
                  <div className="create-product-description-container">
                    <h2 className="create-product-form-header">Description</h2>
                    <p className="create-product-main-info">Tell us more about your item</p>
                    <textarea className="create-product-textarea" value={this.state.description} onChange={this.updateInput("description")}/>
                  </div>
                  <div className="create-product-bottom-container">
                    <div className="create-product-genre-container">
                      <h2 className="create-product-form-header">Pick a genre</h2>
                      <p className="create-product-main-info">How would you classify your item?</p>
                      <select className="create-product-select" defaultValue="" onChange={this.updateInput("genre")}>
                        <option className="create-product-option" value="">Choose a genre...</option>
                        { genreOptions }
                      </select>
                      <p className="create-product-light-info">If what you had in mind is not there, we are sorry</p>
                    </div>
                    <div className="create-product-price-container">
                      <h2 className="create-product-form-header">Price</h2>
                      <input className="create-product-input" value={this.state.price} onChange={this.updateInput("price")}></input>
                      <p className="create-product-light-info">So, how much do you want for this thing?</p>
                    </div>
                    <div className="create-product-submit-container">
                      <button className="create-product-submit">List Your Item!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

// export default ProductCreate;
export default withApollo(ProductCreate);
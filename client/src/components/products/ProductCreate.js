import React from "react";
import { withApollo, Mutation } from "react-apollo";
// import { CURRENT_USER } from "../../graphql/queries";
import { FETCH_GENRES } from "../../graphql/queries";
import { CREATE_PRODUCT } from "../../graphql/mutations";

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
        price: this.state.price,
        genre: this.state.genre,
      }
    });
  }
  // https://5f415b.medialib.edu.glogster.com/lWBTHR1VL9FWuG9cNdbW/media/5f/5f98b98ba503659b650aab1f61911475ea8c0b9e/groucho-glasses-by-mike44nh-d4ut2c6.png

  render() {
    let genreOptions;
    if (this.state.genres) {
      genreOptions = this.state.genres.map(genre => (
        <option key={genre._id} value={genre._id}>{genre.name.slice(0,1).toUpperCase() + genre.name.slice(1)}</option>
      ));
    }

    return (
      <Mutation mutation={CREATE_PRODUCT}>
        {createProduct => {
          return (
            <div>
              <form onSubmit={event => this.handleSubmit(event, createProduct)}>
                <input value={this.state.name} onChange={this.updateInput("name")}></input>
                <input value={this.state.description} onChange={this.updateInput("description")}></input>
                <input value={this.state.image_url} onChange={this.updateInput("image_url")}></input>
                <input value={this.state.price} onChange={this.updateInput("price")}></input>
                <select defaultValue="" onChange={this.updateInput("")}>
                  <option value="">Choose a genre...</option>
                  { genreOptions }
                </select>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

// export default ProductCreate;
export default withApollo(ProductCreate);
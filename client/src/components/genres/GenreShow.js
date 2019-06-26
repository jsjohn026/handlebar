import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { FETCH_GENRE } from "../../graphql/queries";


const GenreShow = (props) => {
  return (
    <Query query={FETCH_GENRE} variables={ {id: props.match.params.genreId} } >
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            console.log(data)
            return(
                <div className="genre-index-container">
                    <h2>{data.genre.name} PAGE</h2>
                    <ul className="genre-index-list">
                        {data.genre.products.map(product => {
                            return (
                                <li key={product._id} className="genre-index-item">
                                    <Link to={`/products/${product._id}`}>
                                        <div className="genre-index-item-top">
                                            <h2>{product.name}</h2>
                                            <div className="genre-index-item-body">
                                                CLICK ME 
                                            </div>
                                        </div>
                                    </Link>

                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        }}
    </Query>
  );
};

export default GenreShow;
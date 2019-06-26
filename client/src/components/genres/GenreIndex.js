import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { FETCH_GENRES } from "../../graphql/queries";
import "../../styles/genre_index.css"

const GenreIndex = () => {
  return (
    <Query query={FETCH_GENRES} >
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return(
                <div className="genre-index-container">
                    <div className="genre-header-container">
                        <h1 className="genre-main-header">Find some Goods </h1>
                        <p className="genre-main-description">Click on a genre that defines you</p>

                    </div>
                    <ul className="genre-index-list">
                        {data.genres.map(genre => {
                            return (
                                <li key={genre._id} className="genre-index-item">
                                    <Link to={`/genres/${genre._id}`}>
                                        <div className="genre-index-item-top">
                                            <div className="genre-index-item-image" style={{backgroundImage: `url(${genre.image_url})`}}/>
                                            <div className="genre-index-item-body">
                                                <h3 className="genre-index-h3-name">{genre.name.toUpperCase()}</h3>
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

export default GenreIndex;
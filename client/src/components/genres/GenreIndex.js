import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { FETCH_GENRES } from "../../graphql/queries";


const GenreIndex = () => {
  return (
    <Query query={FETCH_GENRES} >
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return(
                <div className="genre-index-container">
                    <h2>Some genres</h2>
                    <ul>
                        {data.genres.map(genre => {
                            return (
                                <li key={genre._id}>
                                    <div  className="genre-index-item">
                                        <p>{genre.name}</p>
                                    </div>

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
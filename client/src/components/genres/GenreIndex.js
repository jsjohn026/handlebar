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
                <div>
                    <h2>Some genres</h2>
                    
                </div>
            )
        }}
    </Query>
  );
};

export default GenreIndex;
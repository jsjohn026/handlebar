import React from "react";
import {Mutation} from 'react-apollo'
import {DELETE_PRODUCT} from '../../graphql/mutations'
import {withRouter} from 'react-router-dom'

class ProductDeleteButton extends React.Component{

    constructor(props){
        super(props)
        this.state={
            message: ""
        }
        this.handleError = this.handleError.bind(this)
    }

    handleError(error) {
        
        // this.setState({ message: error.graphQLErrors[0].message });
      }

      

    render(){
        return(
            <Mutation
                mutation={DELETE_PRODUCT}
                onCompleted={data => {
                    this.props.history.push("/");
                }}
                onError={this.handleError}
            >
                {
                    (deleteProduct, {data} ) => (
                        <button onClick={e => {
                            
                            e.preventDefault()
                            deleteProduct({variables: {id: this.props.productId}})
                        }}>
                            delete product
                        </button>
                    )
                }
            </Mutation>
        )
    }
}

export default withRouter(ProductDeleteButton)
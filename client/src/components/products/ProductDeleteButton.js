import React from "react";
import {Mutation} from 'react-apollo'
import {DELETE_PRODUCT} from '../../graphql/mutations'
import {FETCH_PRODUCTS} from '../../graphql/queries'
import {withRouter} from 'react-router-dom'
import '../../styles/productdelete.css'
class ProductDeleteButton extends React.Component{

    constructor(props){
        super(props)
        this.state={
            message: "",
            showModal: false
        }
        this.handleError = this.handleError.bind(this)
        this.handleModalClick = this.handleModalClick.bind(this);
    }

        handleError(error) {
        
        // this.setState({ message: error.graphQLErrors[0].message });
      }

      handleModalClick(){
        const {showModal} = this.state; 
        this.setState({showModal: !showModal})
      }

      handleDeleteEvent(e, deleteProduct) {
          e.preventDefault()
          deleteProduct({variables: {id: this.props.productId}})
      }

    render(){
        return(
            <Mutation
                mutation={DELETE_PRODUCT}
                onCompleted={data => {
                    this.props.history.push("/");
                }}
                onError={this.handleError}
                refetchQueries={() =>{
                    return [{query: FETCH_PRODUCTS}]
                }}
            >
                {
                    (deleteProduct, {data} ) => (
                        <>
                            <button onClick={this.handleModalClick 
                            } className="delete-product-btn">
                                delete product
                            </button>
                            {this.state.showModal ? (
                            <div className="delete-modal-container">
                            <div className="modal" onClick={this.handleModalClick} ></div>
                            <div className="delete-modal-prompt">
                                <div>
                                    
                                    <span>This action cannot be undone...</span>
                                    <div className="delete-modal-button-container">
                                        <button onClick={(e) => {
                                            this.handleDeleteEvent(e, deleteProduct)
                                        }}>remove</button>
                                        <button onClick={this.handleModalClick}> don't</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : null } 
                        </>
                    )
                }
            </Mutation>
        )
    }
}

export default withRouter(ProductDeleteButton)
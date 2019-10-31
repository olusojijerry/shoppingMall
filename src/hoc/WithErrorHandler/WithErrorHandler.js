import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const witherrorhandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount () {
            this.reqInterceptor = axios.intercetors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.intercetors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount () {
            axios.intercetors.request.eject(this.reqInterceptor);
            axios.intercetors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () =>{
            this.setState({error: null});
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...props} />
                </Aux>
            )
        }
    }
}
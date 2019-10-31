import React, { Component } from  'react';

import PersonalDetails from '../../components/AccountInfo/PersonalDetail/PersonalDetails';
import ShippingDetails from '../../components/AccountInfo/ShippingDetails/ShippingDetails';
import TransactionTable from '../../components/AccountInfo/TransactionTable/TransactionTable';

class AccountInfo extends Component{
// this page describes the personal details of the each account holder
    render(){
        return(
            // Main content 
            <main className="my-5">
                <div className="container">
                    <section>
                        <h3>My Account Information</h3>
                        <hr className="mt-3 mb-5" />
                        <div className="row d-flex justify-content-between">
                            <div className="col-sm-12 col-md-6 col-lg-5">
                                {/* Personal Details */}
                                <PersonalDetails personaldetails={this.props.personaldetail} />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-5">
                                {/* Shipping Details */}
                                <ShippingDetails shippingdetails={this.props.shippingdetail} />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-12">
                                <h5>Transaction History</h5>
                                <hr className="mt-3 mb-5" />
                                <TransactionTable transactiondetails={this.props.transactions} />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default AccountInfo;
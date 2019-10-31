import React from 'react';

const subscribe = (props) => (
    <section className="subscribe-area mt-0">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className="subscribe-container">
                        {/* Subscribe Text */}
                        <div className="subscribe-text fix">
                            <h3>Get notified of any offers</h3>
                            <p className="lead">
                                Subscribe to our Newsletter and be notified about our promotions 
                            </p>
                        </div>
                        <div className="subscribe-form fix">
                            <div className="input-group">
                                <input className="form-control" placeholder="Your email here" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default subscribe;
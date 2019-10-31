import React from 'react';

const shippingdetail = (props) => (
    <div class="billing-address shipping-address p-0 border-0">
		<h5>Shipping Details</h5>
		<hr class="mx-0" />
		<div class="shipping-details">
		    <label>{props.shippingdetails.address1}, {props.shippingdetails.address2},<span>{props.shippingdetails.state} State.</span></label>
		    <label>{props.shippingdetails.phone}</label>
		</div>
		<div class="text-right">
			<a class="btn btn-outline-primary btn-sm" data-toggle="collapse" href="#contactaddress" role="button" aria-expanded="false" aria-controls="collapseExample">
				Edit
			</a>
		</div>
	    <div class="collapse" id="contactaddress">
			<div class="card card-body">
                <div class="row">
                    <div class="col-12 form-group">
                        <input type="text" placeholder="Name" class="form-control" />
                    </div>
                    <div class="col-12 form-group">
                        <input type="email" name="" placeholder="Email Address" class="form-control" />
                    </div>
                    <div class="col-12 form-group">
                        <input type="password" name="" placeholder="Password" class="form-control" />
                    </div>
                    <div class="col-12 form-group text-right">
                        <button type="submit" class="btn btn-primary">update</button>
                    </div>
                </div>
		    </div>
	    </div>
	</div>
);

export default shippingdetail;
import React from 'react';

import Logo from '../../../assets/images/logo.png';

const footer = (props) => (
    <div className="footer-top">
        <div className="container">
			<div className="row">
				{/* Footer Widget About */}
				<div className="footer-widget footer-widget-about col-sm-12 col-md-6 col-lg-4">
					<img src={Logo} alt="Logo" />
            		<p>Lorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod <br />empor incididunt oloremque laudantium,</p>
					<div className="footer-social">
						<a href="/">
							<i className="mo-facebook"></i>
						</a>
						<a href="/">
							<i className="mo-twitter"></i>
						</a>
						<a href="/">
							<i className="mo-google-plus"></i>
						</a>
						<a href="/">
							<i className="mo-pinterest"></i>
						</a>
					</div>
				</div>
				{/* Footer Widget Address */}
				<div className="footer-widget footer-widget-address col-sm-12 col-md-6 col-lg-3">
            		<h3>address</h3>
					<p>{props.street}, <br />{props.city}, <br />{props.country}</p>
					<p>{props.phone}</p>
					<p>{props.email}</p>
        		</div>
				{/* Footer Widget Collection */}
				<div className="footer-widget footer-widget-collection col-sm-12 col-md-12 col-lg-5">
					<ul>
						<li><h3>collection</h3></li>
						<li><a href="/">Men</a></li>
						<li><a href="/">Women</a></li>
						<li><a href="/">Kids</a></li>
						<li><a href="/">Accessories</a></li>
						<li><a href="/">Sale</a></li>
						<li><a href="/">Coming Soon</a></li>
					</ul>
					<ul>
						<li><h3>shop</h3></li>
						<li><a href="/">About Us</a></li>
						<li><a href="/">Shipping Methods</a></li>
						<li><a href="/">Career</a></li>
						<li><a href="/">Contact</a></li>
					</ul>
				</div>
			</div>
        </div>
    </div>
);

export default footer;
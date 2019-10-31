import React from 'react';

import src from '../../../assets/images/logo.png';

const sidebar = (props) => (
  <div className="wsmobileheader clearfix"> 
		<a href="/" id="wsnavtoggle" className="animated-arrow"><span></span></a>
		<a href="/" className="smallogo"><img src={src}  alt="" /></a>
		<a className="callusicon" href="tel:123456789"><span className="fa fa-phone"></span></a> 
	</div>
);

export default sidebar;
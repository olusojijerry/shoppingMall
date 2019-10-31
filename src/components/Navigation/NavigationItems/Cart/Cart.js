import React from 'react';

const cart = (props) => (
    <li className="wscarticon clearfix">
        <a href='/'>
            <i className="fa fa-shopping-basket"></i>
            <em className="roundpoint">{props.children}</em>
            <span className="mobiletext">Shopping Cart</span>
        </a>
    </li>
);

export default cart;
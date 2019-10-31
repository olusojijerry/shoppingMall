import React from 'react';

const navigationItem = (props) => (
    <li>
        <span className="wsmenu-click">
            <i className="wsmenu-arrow fa fa-angle-down"></i>
        </span>
        <a href="/" className="navtext" >
            <span><br/></span>
            <span>{props.menuName}</span>
        </a>
        {props.children}
    </li>
);

export default navigationItem;
import React from 'react';

import Aux from '../../../../../hoc/Aux';

const content = (props) => (
    <Aux>
        <li>
            <a href="/">
                <i className="fa fa-sign-in"></i>
                Sign In
            </a>
        </li>
        <li>
            <a href="/">
                <i className="fa fa-registered"></i>
                Register
            </a>
        </li>
        <li>
            <a href="/">
                <i className="fa fa-user-circle"></i>
                My Account
            </a>
        </li>
        <li>
            <a href="/">
                <i className="fa fa-shopping-basket"></i>
                My Cart
            </a>
        </li>
        <li>
            <a href="/">
                <i className="fa fa-sign-out"></i>
                Logout
            </a>
        </li>
    </Aux>
);

export default content;
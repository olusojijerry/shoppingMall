import React from 'react';

import classes from './Avatar.css';
import imgs from '../../../assets/images/7.jpg';
import Aux from '../../../hoc/Aux'
;
const avatar = (props) => (
    <Aux>
        <li className={classes}>
            <img src={imgs} alt="profile pics" className={classes.img} />
            <a href="/">
                <span>{props.children}</span>
            </a>
        </li>
        <li>
            <a href="/">
                <i className="fa fa-shopping-basket"></i><em className={classes.roundpoint}>8</em><span className={classes.mobiletext}>Shopping Cart</span>
            </a>
        </li>
    </Aux>
);

export default avatar;
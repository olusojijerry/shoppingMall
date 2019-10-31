import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
//import Avatar from '../Avatar/Avatar';
//import Aux from '../../../hoc/Aux';

const toolbar = (props) => {
    return (
        <div className="headerfull">
            <div className="wsmain">
                <Logo />
                <NavigationItems images={props.images} tabsDetail={props.tabsLink} products={props.brandlink} brands={props.brand} />
            </div>


                {/* <Avatar>My Account</Avatar> */}
        </div>
    );
}

export default toolbar;
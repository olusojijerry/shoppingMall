import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Menu1 from '../Menu/MenuItems/Menu1/Menu1'
import Menu2 from '../Menu/MenuItems/Menu2/Menu2';
import Menu3 from '../Menu/MenuItems/Menu3/Menu3';
import Menu4 from '../Menu/MenuItems/Menu4/Menu4';
import Cart from './Cart/Cart';
import Account from './Account/Account';

const navigationItems = (props) => (
    <nav className="wsmenu clearfix">
        <ul className="mobile-sub wsmenu-list">
            <NavigationItem active menuName="Men">
                <Menu1 menutitle={props.tabsDetail.menutitle} tabsDetails={props.tabsDetail.tabsdetails}/>
            </NavigationItem>
            <NavigationItem menuName="Women">               
                <Menu2 menu={props.products} ></Menu2>
            </NavigationItem>
            <NavigationItem active menuName="Kids">
                <Menu4 images={props.images}></Menu4>
            </NavigationItem>
            <NavigationItem active menuName="Brand">
                <Menu3 menu={props.brands} ></Menu3>
            </NavigationItem>
            <Cart>8</Cart>
            <Account></Account>
        </ul>
    </nav>   
);

export default navigationItems;
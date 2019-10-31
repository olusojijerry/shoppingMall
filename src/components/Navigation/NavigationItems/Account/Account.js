import React from 'react';

import DropDown from '../../../UI/DropDown/DropDown';
import Content from './Content/Content';

const account = (props) =>(
    <li className="wsshopmyaccount clearfix">
        <span className="wsmenu-click">
            <i className="wsmenu-arrow fa fa-angle-down"></i>
        </span>
        <a className="wtxaccountlink" href="/" >
            <i className="fa fa-user-circle"></i>
            My Account
            <i className="fa fa-angle-down"></i>
        </a>
        <DropDown>
            <Content />
        </DropDown>
    </li>
);

export default account;
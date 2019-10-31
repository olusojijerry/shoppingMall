import React from 'react';

import Content from '../Menu2/Content/Content';

const menu2 = (props) => (
    <div className="wsshoptabing wtsbrandmenu clearfix">
        <div className="wsshoptabingwp clearfix">
            <ul className="wstabitem02 clearfix">
                {/* you should receive an array of all the element and then
                map it to each li */}
                {(props.menu).map((details, i) =>(
                <li key={i} className="wsshoplink-active">
                    <span className="wsmenu-click02">
                        <i className="wsmenu-arrow fa fa-angle-down"></i>
                    </span>
                    <a href="/">
                        <i className={details.logo} aria-hidden="true"></i>
                        {details.type}
                    </a>
                    <div className="wsshoptab-active wstbrandbottom clearfix">
                        {(details.brandCloth).map((brand, i)=>(
                        <ul className="wstliststy02" key={i}>
                            <Content heading={brand.heading}>{brand.details}</Content>
                        </ul>))}
                    </div>
                </li>))}

            </ul>
        </div>
    </div>
);

export default menu2;
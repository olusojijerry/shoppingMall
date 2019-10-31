import React from 'react';

import classes from './Menu1.css';
import Aux from '../../../../../hoc/Aux';
import AnchorLinks from '../../AnchorLinks/AnchorLinks';

const menu1 = (props) => (
    <div className="wsshoptabing wtsdepartmentmenu clearfix">
        <div className="wsshopwp clearfix" style={{height:'563px'}}>
            <ul className="wstabitem clearfix">
                <li className="wsshoplink-active">
                    <span className="wsmenu-click">
                        <i className="wsmenu-arrow fa fa-angle-down"></i>
                    </span>
                    <a href="/" aria-controls="home" role="tab" data-toggle="tab" >
                        <i className="fa fa-male"></i>
                        {props.menutitle}
                    </a>
                    <div className="wstitemright clearfix wsitemrightactive" style={{height: "auto"}}>
                        <div className="wstmegamenucoll clearfix">{(props.tabsDetails).map((details, i) =>(
                            <Aux key={i}>
                                <AnchorLinks title={details.title}>{details.anchor}</AnchorLinks>
                                <div className={classes.cl} style={{height:"8px"}}></div>
                            </Aux>))}  
                        </div>
                    </div>
                </li>
            </ul>
        </div>   
    </div>
);

export default menu1;
import React from "react";

const navigation = (props) =>(
    <nav className="breadcrumb">
        <a className="breadcrumb-item" href={props.navlinks}>{props.navPrev}</a>
        <span className="breadcrumb-item active">{props.navPresent} </span>
    </nav>
);

export default navigation;
import React from 'react';

//import images from "../../../assets/images/7.jpg";


const cards = (props) =>{
    const icon = (props.icon) ? <span className={["pro-label", props.icontag].join(' ')}>{props.iconLabel}</span>: null;
    
    // const imgs = require(props.imageSrc);
    // console.log(imgs);
    return (
    <div className="sin-product" >
        {/* Product Image */}
        <div className="pro-image fix">
            <a href="/">
                <img alt={props.prodtype} src={props.imageSrc} />
            </a>
            {icon}
        </div>
        {/* Product Content */}
        <div className="pro-content px-0">
            <div className="top fix">
                <h3 className="text-truncate">
                    <a href="/">{props.prodtype}</a>
                </h3>
                <div className="text-truncate text-capitalize">{props.prodBrand}</div>
            </div>
            <div className="bottom fix">
                <div className="price">
                    <p className="new">{props.newprice}</p>
                    <p className="old">{props.oldprice}</p>
                </div>
            </div>
        </div>
    </div>
)};

export default cards;
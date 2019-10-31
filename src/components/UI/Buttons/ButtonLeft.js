import React from 'react';

const buttonleft = (props) =>(
    <button className="slick-next pro-slick-next" aria-disabled="false"
    style={{display:"block;"}} type="button" onClick={props.clicked}>
        <span className="fa fa-long-arrow-right"></span>
    </button>
);

export default buttonleft;
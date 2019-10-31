import React from 'react';

const buttonright = (props) => (
    <button className="slick-prev pro-slick-prev slick-arrow" aria-disabled="false" style={{display:"block;"}}
    type="button" onClick={props.clicked}>
        <i className="fa fa-long-arrow-left"></i>
    </button>
);

export default buttonright;
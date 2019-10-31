import React from 'react';

const pricelinks = (props) =>(
    // price range slide
    <div className="price-range-wrap">
        <p>You Range<input type="text" id="price-amount" readOnly /></p>
        <div id="slider-range">
            {props.pricerange}
        </div>
    </div>
);

export default pricelinks;
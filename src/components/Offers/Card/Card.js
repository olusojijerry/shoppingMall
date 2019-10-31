import React from 'react';

const cards = (props) => (
    <div className="single-offer">
        <div className="offer-wrap">
            <a href={props.links} className="offer-image"><img src={props.srcimg} alt="offers" /></a>
        </div>
    </div>
)

export default cards;
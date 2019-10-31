import React from 'react';

import images from './Imagess';


const content = (props) => {
    const mee = images.map((id, src) => (
        <li key={id}>
                <a href={props.link}>
                    <span>{props.brandName}</span>
                    <img src={src} alt={props.brand} /> 
                </a>
            </li>
    ))
    return(
        <div>{mee}</div>
    )};

export default content;

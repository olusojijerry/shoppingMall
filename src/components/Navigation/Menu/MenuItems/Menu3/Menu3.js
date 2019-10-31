import React from 'react';

import Content from '../Menu2/Content/Content';

const menu3 = (props) =>(
    <div className="megamenu clearfix">
        {(props.menu).map((brand, i)=>(
        <ul className="wstliststy02" key={i}>
            <Content heading={brand.heading}>{brand.details}</Content>
        </ul>))}
    </div>
)

export default menu3;
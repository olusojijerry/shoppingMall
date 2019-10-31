import React from 'react';

import Content from './Content/Content';

const menu4 = (props) => (
    <div className="megamenu clearfix">
        <ul className="wstliststy04">
            <Content images={props.images} />
        </ul>
    </div>
);

export default menu4;

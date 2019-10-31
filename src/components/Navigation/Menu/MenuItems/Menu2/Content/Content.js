import React from 'react';

import Aux from '../../../../../../hoc/Aux';

const content = (props) => (
    <Aux>
        <li className="wstheading">{props.heading}</li>
        {(props.children).map((items, i) =>
            <li key={i}>
                <a href={items.link}>{items.linkName}</a>
            </li>
        )}
    </Aux>
)

export default content;
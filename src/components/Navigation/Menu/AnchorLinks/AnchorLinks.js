import React from 'react';

import Aux from '../../../../hoc/Aux';

const anchorLinks = (props) =>{
    return(
        <Aux>
            <div className="wstheading">{props.title}</div>
            <ul className="wstliststy01">
                {
                    (props.children).map((ctrl, i) => (
                        <li key={i}><a href={ctrl.link}>{ctrl.name}</a></li>
                    ))
                } 
            </ul>
        </Aux>
    );
}

export default anchorLinks;
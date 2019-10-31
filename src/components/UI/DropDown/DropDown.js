import React from 'react';

const dropdown = (props) => (
    <ul className="wsmenu-submenu">
        {props.children}
    </ul>
);

export default dropdown;
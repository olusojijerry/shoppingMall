import React from 'react';

const sidebar = (props) =>(
    <div className="sin-shop-sidebar">
        <div className="head title fix">
            <h4>{props.sidebartitle}</h4>
        </div>
        {/* treeview start */}
        {props.children}
    </div>
)

export default sidebar;
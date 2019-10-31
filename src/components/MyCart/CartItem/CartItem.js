import React from 'react';

import Aux from '../../../hoc/Aux';

const cartitem = (props) => (
    <Aux>
        <div class="col-md-6 fix d-flex">
            <a href="/" class="cart-image"><img src={props.cartitem.cartimg} alt="" /></a>
            <div class="cart-item-content fix align-self-center">
                <div class="title text-truncate">
                    <a href="/">
                        {props.cartitem.brandname}
                        <span class="ml-1 d-inline">
                            {props.cartitem.prodname}
                        </span>
                    </a>
                </div>
                <span>Size : <strong>{props.cartitem.size}</strong></span>
                <span>Color : <strong>{props.cartitem.color}</strong></span>
                <span class="price">{props.cartitem.price}</span>
            </div>
        </div>
        <div class="col-6 col-md-3 cart-content border-right-0">
            <div>
                <div class="cart-qty">
                    <span class="dec qtybtn">-</span>
                    <input maxlength="99" class="input-cart-qty" value={props.cartitem.quantity} />
                    <span class="inc qtybtn">+</span>
                </div>
            </div>
        </div>
        <div class="col-6 col-md-2 cart-content text-right  text-md-left text-lg-left text-xl-left ">
            <div class="price">{props.cartitem.total}</div>
        </div>
        <div class="col-1 text-right cart-remove">
            <i class="fa fa-remove"></i>
        </div> 
    </Aux>
);

export default cartitem;
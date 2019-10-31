import React, {Component} from 'react';

import CartItem from '../../components/MyCart/CartItem/CartItem';

class Cart extends Component {

    renders(){
        return(
            // main area
            <main className="cart-page my-5">
                <div className="container">
                    <section>
                        <div className="row">
                            <div className="col-12">
                                <h3>My Cart</h3>
                                <hr />
                                <div className="mb-5">
                                    <div className="row no-gutters cart-title hidden-sm-down">
                                        <div className="col-6">Items</div>
                                        <div className="col-3">Quantity</div>
                                        <div className="col-2">Total</div>
                                    </div>
                                    <div className="row no-gutters cart-items d-flex align-items-center">
                                        {/* Cart Items */}
                                        {(this.props.cartitem).map((cart, i)=>(
                                            <CartItem cartItem={cart} key={i} />
                                        ))}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="payment-details p-3">
                                            <div class="payment-wrapper">
                                                <div class="subtotal fix">
                                                    <p class="float-left">Subtotal</p>
                                                    <span class="float-right price">{this.props.cartitem.subtotal}</span>
                                                </div>
                                                <div class="shipping fix">
                                                    <p class="float-left">Shipping</p>
                                                    <span class="float-right price">Free Shipping</span>
                                                </div>
                                                <hr class="my-4" />
                                                <div class="grandtotal">
                                                    <p class="float-left">Grand Total</p>
                                                    <span class="float-right price">{this.props.cartitem.grandtotal}</span>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="text-right mt-5">
                                                    <a href="checkout.html" class="btn btn-primary">Procced to Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>		
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
        }
}
export default Cart;
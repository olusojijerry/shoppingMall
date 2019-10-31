import React from 'react';

import Slider from './Slider/Slider';

const promosales = (props) => {
    let colorstyles = {
        backgroundColor: props.color,
        border: props.color
    };

    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="promo-pro-container" style={colorstyles}>
                            <div className="row no-gutters">
                                {/* Promo Product Text */}
                                <div class="promo-pro-text col-lg-3 col-md-12">
                                    <div className="wrap d-flex justify-content-between flex-column">
                                        <div>
                                            <span className={["promo-label", props.promotag].join(' ')}>{props.promotagname}</span>
                                            <h2>{props.promoname}</h2>
                                        </div>
                                        <div>
                                            Up To {props.discountrate} Off
                                            <span>on selected items</span>
                                        </div>
                                        <div>
                                            <a href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Promo Product Slider */}
                                <div className="promo-pro-slider col-lg-9 col-md-12 slick-initialized slick-slider">
                                    <Slider proddetail={props.proddetail} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
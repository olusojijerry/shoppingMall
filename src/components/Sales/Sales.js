import React from 'react';
import Slider from 'react-slick';

import Cards from './Cards/Cards';
import Buttonleft from '../UI/Buttons/ButtonLeft';
import ButtonRight from '../UI/Buttons/Buttonright';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
}
const sales = (props) => (
    <section className="tab-product">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title d-flex align-items-center justify-content-between">
                        <h5 className="text-truncate">
                            {props.proddetail.colTitle}
                        </h5>
                        <a href="/">
                            See All
                        </a>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row no-gutters mb-3">
                        {
                            (props.proddetail).proddetail.map((product, index)=>(
                                <Cards icon={product.icon} icontag={product.tag}
                                iconLabel={product.Label} index={index} prodtype={product.type}
                                imageSrc={product.imageLoc} prodBrand={product.brand}
                                newprice={product.newprice} oldprice={product.oldprice}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default sales;
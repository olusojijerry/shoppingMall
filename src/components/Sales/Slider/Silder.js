import React from 'react';

import Aux from '../../../hoc/Aux';
import Buttonleft from '../../UI/Buttons/ButtonLeft';
import Buttonright from '../../UI/Buttons/Buttonright';
import Cards from '../Cards/Cards';

const slider = (props) => {
    
    return(
    <Aux>
        <Buttonleft clicked={() => props.scroll(null, -1)} />
        <div className="slick-list draggable">
            <div className="slick-track" style={{width:"25000px;", opacity:"1;", transform:"translate3d(0px, 0px, 0px);"}}>
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
        <Buttonright clicked={() => props.scroll( -1)} />
    </Aux>
    )
            
}

export default slider;
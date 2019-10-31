import React from 'react';

import Spinner from '../../Spinner/Spinner';
import Cards from '../../Sales/Cards/Cards'

const postCards = (props) => {
    if (props.isLoading){
        return <Spinner />
    }

    return (
        <div className="row no-gutters mb-3">
            {
                props.cardData.map(cardData => (
                    <div className='col-6 col-md-4 col-lg-4 col-xlg-4'>
                        <Cards icon={cardData.icon} iconLabel={cardData.iconLabel} imageSrc={cardData.imageSrc}
                        prodtype={cardData.prodtype} prodBrand={cardData.prodBrand} newprice={cardData.newprice}
                        oldprice={cardData.oldprice} />
                    </div>
                )
                )
            }
        </div>
    )
}

export default postCards;
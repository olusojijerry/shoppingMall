import React from 'react';

const links = (props) =>(
    
    <div className="product-cat">
    {
        (props.links.prodtype).map((type) =>(
            <ul>
                <li><a href={type.link}>{type.name}</a></li>
                <ul>
                    {(props.types.products).map((product)=>(
                        <li><a href={product.link}>{product.prodName}</a></li>
                    ))}
                </ul>
            </ul>
        ))
    }
    </div>
);

export default links;
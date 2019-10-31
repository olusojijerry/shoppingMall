import React from 'react';

const sizeslinks = (props) => (
    <div class="product-sizes">
		<ul>
			{(props.sizes.sizes).map((size) =>(
                <li> {size} </li>
            ))}
		</ul>
	</div>
);

export default sizeslinks;
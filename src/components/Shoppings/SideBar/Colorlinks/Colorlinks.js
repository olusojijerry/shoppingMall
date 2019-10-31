import React from 'react';

const colorlinks = (props) =>(
    <div class="product-color">
		<ul>
			{(props.colorlinks.links).map(colors =>(
                <li>{colors}</li>
            ))}
		</ul>
	</div>
);

export default colorlinks;
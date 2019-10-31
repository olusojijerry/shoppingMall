import React from 'react';

import PostCards from '../PostCard/PostCard';
import Paginate from '../../../containers/Paginate/Paginate';
const shop = (props) => (
    <div className="col-lg-9">
        <div className="row">
            {/* Top Toolbar */}
            <div className="col-12">
                <div className='shop-top-toolbar'>
                    <div className='float-left'>
                        <button type='button' className='btn btn-outline-primary btn-sm mr-2 hidden-lg-up'>Filter</button>
                        <span className='mr-1'>{props.shop.items.length}</span>Items
                    </div>
                    <div className='dropdown float-right'>
                        <button className='btn btn-secondary dropdown-toggle btn-sm' type='button' id='dropdownmenubutton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Sort By
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>

                    </div>
                </div>
            </div>
        </div>
        {/* post card also expects an array of paginated cards */}
        <PostCards cardData={props.shop} />
        {/* paginate is expecting some values think through and kow how to pass them including the paginate method */}
        <Paginate />
    </div>
)

export default shop;
import React from 'react';

const paginated = ({ postperpage, totalpost, activatePrev, activateNext }) => {
    const pages = [];

    for(let i = 1; i < Math.ceil(totalpost/postperpage); i++){
        pages.push(i);
    }
    
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                {pages.map(numbers =>
                    <li class="page-item active"><a class="page-link" href="/">{numbers}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default paginated; 
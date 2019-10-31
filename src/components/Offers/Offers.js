import React from 'react';

import Cards from './Card/Card';

const offers = (props) => (
    <section className="offers-area">
        <div className="container">
            <div className="offer">
                {
                    (props.offfers).map((ofer, i) => (
                        <Cards links={ofer.link} srcimg={ofer.scr} />
                    ))
                }
            </div>
        </div>
    </section>
)
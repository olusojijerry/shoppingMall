import React from 'react';

import paymentLogo from '../../../assets/images/payment.png';

const footerbottom = (props) => (
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                {/* Footer Payment */}
                <div className="payment col-sm-12 col-md-6 text-center text-md-right text-lg-right text-xl-left">
                    <img src={paymentLogo} alt="paymentPlatformLogo" />
                </div>
                {/* Footer Copyright */}
                <div className="copyright col-sm-12 col-md-6 text-center text-md-right text-lg-right text-xl-right">
                    <p>&copy; 2016 <a href="/">company's name</a>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
);

export default footerbottom;
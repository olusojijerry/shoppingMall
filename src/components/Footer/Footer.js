import React from 'react';

import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

const footer = () => (
    <footer>
        <div className="footer-area">
            {/* Footer Top */}
            <FooterTop street="No. 1 lagos street" city="lagos island" country="Lagos, Nigeria"
            phone="+234 000 000 0000" email="sales@company'sname.com" />
            {/* Footer Bottom */}
            <FooterBottom />
        </div>
    </footer>
);

export default footer;
import React from 'react';

const titleBar = (props) => {
    return (
        <div className="headtoppart clearfix hidden-md-down">
			<div className="headerwp">
				<div className="headertopleft">
					<div className="address clearfix">
						<span><i className="fa fa-envelope-o" aria-hidden="true"></i>info@email.com</span> 
						<a href="/"><i className="fa fa-phone" aria-hidden="true"></i>234 000 000 0000</a>
					</div>
				</div>
				<div className="headertopright">
					<a title="Facebook" href="/"><i aria-hidden="true" className="fa fa-facebook"></i> <span className="mobiletext02">Facebook</span></a>
					<a title="Twitter" href="/"><i aria-hidden="true" className="fa fa-twitter"></i> <span className="mobiletext02">Twitter</span></a> 
					<a title="Linkedin" href="/"><i aria-hidden="true" className="fa fa-linkedin"></i> <span className="mobiletext02">Linkedin</span></a> 
					<a title="Google" href="/"><i aria-hidden="true" className="fa fa-google"></i> <span className="mobiletext02">Google</span></a> 
				</div>
			</div>
		</div>
    );
}

export default titleBar;
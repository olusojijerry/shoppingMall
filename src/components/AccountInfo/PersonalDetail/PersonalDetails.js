import React from 'react';

const personaldetail = (props) => (
    <div class="coustomer-details p-0 border-0">
		<h5>Name,Email & Password</h5>
		<hr class="mx-0" />
		<div class="content">
			<ul>
				<li>{props.personaldetails.name}</li>
				<li>{props.personaldetails.email}</li>
				<li>*********</li>
			</ul>
		</div>
		<div class="text-right">
			<a class="btn btn-outline-primary btn-sm" data-toggle="collapse" href="#contactdetails" role="button" aria-expanded="false" aria-controls="collapseExample">
				Edit
			</a>
		</div>
		<div class="collapse" id="contactdetails">
			<div class="card card-body">
				<div class="row">
					<div class="col-12 form-group">
						<input type="text" placeholder="Name" class="form-control" />
					</div>
					<div class="col-12 form-group">
						<input type="email" name="" placeholder="Email Address" class="form-control" />
					</div>
					<div class="col-12 form-group">
						<input type="password" name="" placeholder="Password" class="form-control" />
					</div>
					<div class="col-12 form-group text-right">
						<button type="submit" class="btn btn-primary">update</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default personaldetail;
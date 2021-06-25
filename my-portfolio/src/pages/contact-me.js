import React from 'react';

const Contact = () => {
	return (
		<div>
			<body>
				<section className='main-content-box'>
					<h1 id='contact-me'>Contact Me</h1>
					<p>
						Feel free to reach out and contact me at any one of these 3
						locations! Email is Prefered!
					</p>
					<br />
					<div class='contact d-flex justify-content-around'>
						<a href='https://github.com/lordgeer'>
							<img
								class='mash'
								src='/images/GitHub-Mark-64px.png'
								alt='GitHub'
							/>
						</a>
						<a href='mailto:thomas.g.musler@gmail.com'>
							<img
								class='mash'
								src='/images/Gmail-logo.jpg'
								alt='Email'
							/>
						</a>
						<a href='https://www.linkedin.com/in/thomas-musler-031752178/'>
							<img
								class='mash'
								src='/images/LI-In-Bug.png'
								alt='LinkedIn'
							/>
						</a>
					</div>
					<div className='section'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='section-title'>
										<hr />
										<form id='contact-form'>
											<div className='form-group'>
												<div className='row'>
													<div className='col-md-6'>
														<input
															placeholder='Name'
															id='name'
															type='text'
															className='form-control'
														/>
													</div>
													<div className='col-md-6'>
														<input
															placeholder='Email'
															id='email'
															type='email'
															className='form-control'
														/>
													</div>
												</div>
											</div>
											<div className='form-group'>
												<input
													placeholder='Subject'
													id='subject'
													type='text'
													className='form-control'
												/>
											</div>
											<div className='form-group'>
												<textarea
													placeholder='Message'
													id='message'
													className='form-control'
												/>
											</div>
											<button
												type='submit'
												className='primary-btn submit'>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</body>
			<script
				src='https://unpkg.com/react/umd/react.production.min.js'
				crossorigin></script>
		</div>
	);
};

export default Contact;

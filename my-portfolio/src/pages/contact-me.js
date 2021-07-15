import React, { useState } from 'react';
import emailjs, {init} from 'emailjs-com';

init(process.env.REACT_APP_USER_ID);

const Contact = () => {
	const [statusMessage, setStatusMessage] = useState('Message');

	function sendEmail() {
		e.preventDefault();

		const form = document.getElementById('contact-form');
		const statusMsg = document.getElementById('status-message');

		emailjs
			.sendForm(
				'contact_form',
				'template_contact',
				e.target,
			)
			.then(
        (result) => {
          form.reset();
          console.log(result.text);
          setStatusMessage('Message sent!');
          statusMsg.className = 'status-message';
          setTimeout(() => {
            statusMsg.className = 'status-message';
				}, 5000);
				},
				(error) => {
					console.log(error.text);
          setStatusMessage('Failed to send message! Try again later.');
          statusMsg.className = 'status-message';
          setTimeout(() => {
            statusMsg.className = 'status-message';
				}, 5000);
    });
  }

	return (
		<div>
			<section className='main-content-box'>
				<h2 id='about-me'>Contact Me</h2>
				{/* "handleSubmit" will validate your inputs before invoking "onSubmit"
				 */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Name:</label>
					<input
						type='text'
						{...register('fullName', { required: true, maxLength: 80 })}
						id='fullName'
					/>
					{errors.fullName && <p>Name is required.</p>}

					<label>Email Address:</label>
					<input
						type='text'
						{...register('Email', {
							required: true,
							pattern:
								/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
						})}
						id='emailAddress'
					/>
					{errors.Email && <p>Enter a valid email address.</p>}

					<label>Message:</label>
					<textarea
						type='text'
						{...register('Message', { required: true, maxLength: 1500 })}
						id='message'
					/>
					<p className='message-chars-left'>{messageCharsLeft}/1500</p>
					{errors.Message && <p>Message is required.</p>}

					<input type='submit' />
				</form>
			</section>
		</div>
	);
};

export default Contact;

import React, {useState} from 'react';
import emailjs, {init} from 'emailjs-com';

init(process.env.REACT_APP_USER_ID);

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState();

  function sendEmail(e) {
		e.preventDefault();

    const form = document.querySelector('#contact');
    const statusMsg = document.querySelector('.status-message');

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
				<h2>Contact Me</h2>
				<form onSubmit={sendEmail} id='contact'>
					<label>Name:
					</label>
					<input type='text' name='from_name' required />

					<label>Email Address:</label>
					<input
						type='email'
						pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
						name='reply_to'
						required
					/>

					<label>Message:</label>
					<textarea type='text' name='message' maxLength='1500' required />

					<p className='status-message'>{statusMessage}</p>
					<input type='submit' value='Send' />
				</form>
			</section>
		</div>
  );
};

export default Contact;
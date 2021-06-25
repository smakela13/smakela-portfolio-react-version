import React from 'react';
import {useForm} from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const message = watch('Message') || '';
  const messageCharsLeft = 1500 - message.length;

  console.log(watch("example")); // watch input value by passing the name of it

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
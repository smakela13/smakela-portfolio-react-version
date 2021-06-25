import React from 'react';
import {useForm} from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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

					<label>Email Address:</label>
					<input
						type='text'
						{...register('Email', {
							required: true,
							pattern:
								/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						id='emailAddress'
					/>

					<label>Message:</label>
					<textarea
						type='text'
						{...register('Message', { required: true })}
						id='message'
					/>

					{errors.fullName && <p>Name is required.</p>}
					{errors.Email && <p>Please enter a valid email address.</p>}
					{errors.Message && <p>A message is required.</p>}

					<input type='submit' />
				</form>
			</section>
		</div>
  );
};

export default Contact;
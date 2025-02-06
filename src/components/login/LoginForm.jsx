import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { config } from '../../config';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    setErrorMessage(null);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
 
      // TODO: Replace with your own form endpoint

      const res = await fetch(config.getBookingsDetailsURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();
      if (res.ok && result.success) {
        reset(); // Reset the form on success
      } else {
        setErrorMessage(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <div className="container">
      {isSubmitSuccessful && !errorMessage ? (
        <h2 className="text-success">Message sent!</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
          <div className="responsive-form">
            {/* username Field */}
            <div className="mb-3 med-field">
              <label htmlFor="name" className="form-label">Username</label>
              <input
                id="username"
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                {...register('username', { required: "Please enter a username" })}
              />
              {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
            </div>
            {/* password Field */}
            <div className="mb-3 med-field">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register('password', { required: "Please enter a password"})}
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
            {isSubmitting ? "Loggin in..." : "log in"}
          </button>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
        </form>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { config } from '../../config';

export default function BookingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();
  
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    setErrorMessage(null);
    // if (weeks.weeks.length === 0) {
    //   setErrorMessage("You must select one or more weeks");
    //   return;
    // }
    
    const formData = new FormData();
    
    formData.append("access_key", config.formKey);
    
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // formData.append('dates', weeks.weeks.join('\r\n'));
    let object = Object.fromEntries(formData);
    object.subject = `Booking request from ${object.name ? object.name : "unknown"} for Oléron Villa`;
    object.redirect = "https://www.thievesgarden.co.uk/";
    const json = JSON.stringify(object);
    
    console.log(`Submit`);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
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
      setErrorMessage(`"Failed to send message": ${error.message}`);
    }
  };
  
  return (
    <div className='space-above'>
    {isSubmitSuccessful && !errorMessage ? (
      <h2 className="text-success">Your message has been sent!</h2>
    ) : (
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
      <div className="responsive-form">
        {/* Start Date */}

        {/* Start Date */}

      {/* Email Field */}
      <div className="med-field">
      <label htmlFor="email" className="form-label">Email</label>
      <input
      id="email"
      type="email"
      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
      {...register('email', {
        required: "Email address required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Valid email address required",
        },
      })}
      />
      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      {/* Optional Phone Number Field */}
      <div className="mb-3 med-field">
      <label htmlFor="phone" className="form-label">Phone number (optional)</label>
      <input
      id="phone"
      type="tel"
      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
      {...register('phone', {
        pattern: {
          value: /^\+?[0-9]{7,15}$/,
          message: "Phone number needs to be in a valid form",
        },
      })}
      />
      {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
      </div>
      {/* Name Field */}
      <div className="mb-3 med-field">
      <label htmlFor="name" className="form-label">Name</label>
      <input
      id="name"
      type="text"
      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
      {...register('name', { required: "Please enter a name" })}
      />
      {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>
      </div>
      {/* Message Field */}
      <div className="mb-3">
      <label htmlFor="message" className="form-label">Message (optional)</label>
      <textarea
      id="message"
      rows={5}
      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
      {...register('message')}
      />
      {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
      </div>
      <div className="mb-3">
      </div>
      {/* Submit Button */}
      <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
      {isSubmitting ? "Sending..." : "Request booking"}
      </button>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>
    )}
    </div>
  );
}
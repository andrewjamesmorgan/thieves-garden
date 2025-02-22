import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { config } from '../../../config';

export default function AdminBookingForm({booking, refresh}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    // defaultValues: {
    //   email: booking?.booking?.email || ""
    // },
  });
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingToWrite, setBookingToWrite] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Dynamically update default values if booking parameter changes
    if (booking) {
      setBookingToWrite(booking);
      setValue('email', booking.booking?.email ?? '');
      setValue('name', booking.booking?.name ?? '');
      setValue('source', booking.booking?.source ?? '');
      setValue('price', booking.booking?.price ?? '');
      if (booking.startDate) {setStartDate(new Date(booking.startDate));}
      if (booking.endDate) {setEndDate(new Date(booking.endDate));}
      setValue('comments', booking.comments ?? '');
      setValue('status', booking.status ?? '');

      // TODO: Set other default values here if needed
    }
  }, [booking, setValue]);

  const onSubmit = async (data) => {
    setErrorMessage(null);

    if (!startDate || !endDate) {
      setErrorMessage("Start and end dates are required.");
      return;
    }
    if (startDate >= endDate) {
      setErrorMessage("End date must be after start date.");
      return;
    }

    if (startDate < new Date()) {
      setErrorMessage("Start date must be in the future.");
      return;
    }

    const formData = new FormData();
    formData.append("startDate", startDate.toISOString());
    formData.append("endDate", endDate.toISOString());
    
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let object = Object.fromEntries(formData);
    object.subject = 
      `Booking request from ${object.name ? object.name : "unknown"} for Thieves Garden`;
    object.redirect = "https://www.thievesgarden.co.uk/";
    const json = JSON.stringify(object);
    
    console.log(`Submit`, json);
    
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
        setStartDate(null); // Clear the start date
        setEndDate(null); // Clear the end date
      } else {
        setErrorMessage(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(`"Failed to send message": ${error.message}`);
    }
  };
  
  return (
    <div className='form-container space-above'>
    {isSubmitSuccessful && !errorMessage ? (
      <h2 className="text-success">Your message has been sent!</h2>
    ) : (
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <div className="responsive-form">
          {/* Start Date */}
          <div className="mb-3 med-field">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <br/>
            <ReactDatePicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              placeholderText="Select start date"
            />
          </div>

          {/* End Date */}
          <div className="mb-3 med-field">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <br/>
            <ReactDatePicker
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              placeholderText="Select end date"
            />
          </div>

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

          {/* Source Field */}
          <div className="mb-3 med-field">
            <label htmlFor="source" className="form-label">Source</label>
            <select
              id="source"
              className={`form-control ${errors.source ? 'is-invalid' : ''}`}
              {...register('source', { required: "Please select a source" })}
            >
              <option value="">Select source</option>
              <option value="Airbnb">Airbnb</option>
              <option value="direct">Direct</option>
            </select>
            {errors.source && <div className="invalid-feedback">{errors.source.message}</div>}
          </div>

          {/* Status Field */}
          <div className="mb-3 med-field">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              className={`form-control ${errors.status ? 'is-invalid' : ''}`}
              {...register('status', { required: "Please select a status" })}
            >
              <option value="">Select status</option>
              <option value="tentative">Tentative</option>
              <option value="booked">Booked</option>
            </select>
            {errors.status && <div className="invalid-feedback">{errors.status.message}</div>}
          </div>

          {/* Price Field */}
          <div className="mb-3 med-field">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              id="price"
              type="text"
              className={`form-control ${errors.price ? 'is-invalid' : ''}`}
              {...register('price', { required: "Please enter a price" })}
            />
            {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
          </div>
        </div>

        {/* Comments Field */}
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Comments (optional)</label>
          <textarea
            id="comments"
            rows={5}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            {...register('comments')}
          />
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : (booking ? "Update booking" : "Add booking")}
        </button>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>
    )}
    </div>
  );
}
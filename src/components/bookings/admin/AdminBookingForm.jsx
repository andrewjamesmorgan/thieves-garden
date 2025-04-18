import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { config } from '../../../config';

export default function AdminBookingForm({ booking, refresh, clearBooking }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (booking) {
      setValue('email', booking.booking?.email ?? '');
      setValue('name', booking.booking?.name ?? '');
      setValue('source', booking.booking?.source ?? '');
      setValue('price', booking.booking?.price ?? '');
      if (booking.startDate) { setStartDate(new Date(booking.startDate)); }
      if (booking.endDate) { setEndDate(new Date(booking.endDate)); }
      setValue('comments', booking.comments ?? '');
      setValue('status', booking.status ?? '');
    }
  }, [booking, setValue]);

  const removeEmptyFields = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
  };

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

    // Add 12 hours to startDate and endDate to cope with DST
    const startDatePlus12 = new Date(startDate.getTime() + 12 * 60 * 60 * 1000);
    const endDatePlus12 = new Date(endDate.getTime() + 12 * 60 * 60 * 1000);

    let bookingToStore = {
      _id: booking?._id,
      startDate: startDatePlus12.toISOString(),
      endDate: endDatePlus12.toISOString(),
      property: config.location,
      status: data.status,
      comments: data.comments,
      booking: {
        email: data.email,
        name: data.name,
        source: data.source,
        price: data.price
      }
    };

    bookingToStore = removeEmptyFields(bookingToStore);
    bookingToStore.booking = removeEmptyFields(bookingToStore.booking);
    const bodyObject = {
      username: localStorage.getItem("tg-username"),
      password: localStorage.getItem("tg-password"),
      booking: bookingToStore
    }

    const json = JSON.stringify(bodyObject);

    console.log(`Submit`, json);

    if (booking) {
      try {
        const res = await fetch(config.updateBookingURL, {
          method: "POST",
          body: json,
        });
        const result = await res.json();
        if (res.ok) {
          reset(); // Reset the form on success
          setStartDate(null);
          setEndDate(null);
          clearBooking();
        } else {
          setErrorMessage(`Failed to send message to update booking: ${result.message}`);
        }
      } catch (error) {
        setErrorMessage(`Failed to send message to update booking: ${error.message}`);
      }
    } else {
      try {
        const res = await fetch(config.addBookingURL, {
          method: "POST",
          body: json,
        });
        const result = await res.json();
        if (res.ok) {
          reset(); // Reset the form on success
          setStartDate(null);
          setEndDate(null);
          clearBooking();
          console.log("Booking added successfully");
        } else {
          console.log(`Failed to send message to add booking: ${result.message}`);
          setErrorMessage(`Failed to send message to add booking: ${result.message}`);
        }
      } catch (error) {
        console.log(`Exception: Failed to send message to add booking: ${error.message}`);
        setErrorMessage(`Exception: Failed to send message to add booking: ${error.message}`);
      }
    }
    refresh();
  };

  const onDelete = async () => {
    if (!booking) {
      return;
    }

    const confirmed = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmed) {
      return;
    }

    setErrorMessage(null);
    const bodyObject = {
      username: localStorage.getItem("tg-username"),
      password: localStorage.getItem("tg-password"),
      _id: booking._id,
    }
    const json = JSON.stringify(bodyObject);
    console.log(`Delete`, json);
    try {
      const res = await fetch(config.deleteBookingURL, {
        method: "POST",
        body: json,
      });
      const result = await res.json();
      if (res.ok) {
        reset();
        setStartDate(null);
        setEndDate(null);
        console.log("Booking deleted successfully");
      } else {
        console.log(`Failed to send message to delete booking: ${result.message}`);
        setErrorMessage(`Failed to send message to delete booking: ${result.message}`);
      }
    } catch (error) {
      console.log(`Exception: Failed to send message to delete booking: ${error.message}`);
      setErrorMessage(`Exception: Failed to send message to delete booking: ${error.message}`);
    }
    clearBooking();
    refresh();
  };

  const onStartDate = (date) => {
    setStartDate(date);
    if (!endDate) {
      const newEndDate = new Date(date);
      newEndDate.setDate(newEndDate.getDate() + 7);
      setEndDate(newEndDate);
    };
  }

  return (
    <div className='form-container space-above'>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <div className="responsive-form">
          {/* Start Date */}
          <div className="mb-3 med-field narrow-field">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <br/>
            <ReactDatePicker
              id="startDate"
              selected={startDate}
              onChange={onStartDate}
              dateFormat="yyyy-MM-dd"
              className="form-control centered-input"
              placeholderText="Select start date"
            />
          </div>

          {/* End Date */}
          <div className="mb-3 med-field narrow-field">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <br/>
            <ReactDatePicker
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control centered-input"
              placeholderText="Select end date"
            />
          </div>

          {/* Email Field */}
          <div className="med-field medium-field">
            <label htmlFor="email" className="form-label">Email (optional)</label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''} centered-input`}
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Valid email address required",
                },
              })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Optional Phone Number Field */}
          <div className="mb-3 med-field medium-field">
            <label htmlFor="phone" className="form-label">Phone number (optional)</label>
            <input
              id="phone"
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''} centered-input`}
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
          <div className="mb-3 med-field medium-field">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''} centered-input`}
              {...register('name', { required: "Please enter a name" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          {/* Source Field */}
          <div className="mb-3 med-field narrow-field">
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
          <div className="mb-3 med-field narrow-field">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              className={`form-control ${errors.status ? 'is-invalid' : ''} centered-input`}
              {...register('status', { required: "Please select a status" })}
            >
              <option value="">Select status</option>
              <option value="tentative">Tentative</option>
              <option value="booked">Booked</option>
            </select>
            {errors.status && <div className="invalid-feedback">{errors.status.message}</div>}
          </div>

          {/* Price Field */}
          <div className="mb-3 med-field very-narrow-field">
            <label htmlFor="price" className="form-label">Price (£)</label>
            <input
              id="price"
              type="text"
              className={`form-control ${errors.price ? 'is-invalid' : ''} centered-input`}
              {...register('price')}
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
        {/* Delete Button */}
        {booking && (
          <button type="button" className="btn btn-primary btn-primary-branded btn-primary-danger" onClick={onDelete} disabled={isSubmitting}>
            Delete booking
          </button>
        )}
        {/* Error message */}
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>
    </div>
  );
}
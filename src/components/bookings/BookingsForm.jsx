import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { config } from '../../config';
import { bookingData } from '../../data/bookingData';

function checkBooking(date) {
  let status = 'available';
  bookingData.forEach ((booking) => {
    if (date >= booking.startDate && date < booking.endDate) {
      status = booking.status;
    }
  });
  return status;
}

function generateCalendarData(years) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return years.flatMap(year => {
    const today = new Date();
    if (year >= today.getFullYear()) {
      const months = [];
      
      for (let month = 0; month < 12; month++) {
        if (year > today.getFullYear() || 
            (year === today.getFullYear() && month >= today.getMonth())) {
          const days = [];
          const date = new Date(year, month, 1);

          // Add filler days for the first week
          for (let fillerDay = date.getDay(); fillerDay > 0; fillerDay--) {
            days.push({
              dayOfMonth: 1 - fillerDay,
              status: "filler"
            });
          }

          // Add actual days of the month
          while (date.getMonth() === month) {
            days.push({
              dayOfMonth: date.getDate(),
              dayOfWeek: date.getDay(),
              status: checkBooking(date),
            });
            date.setDate(date.getDate() + 1);
          }

          // Add filler days for the last week
          for (let fillerDay = days.length; fillerDay < 37; fillerDay++) {
            days.push({
              dayOfMonth: fillerDay + 1,
              status: "filler"
            });
          }

          // Add the month object with its name and days
          months.push({
            monthName: monthNames[month],
            days
          });
        }
      }

      return {
        year,
        months
      };
    }
  }).filter(Boolean); // Remove any undefined values (years before the current year)
}

export default function BookingsForm(weeks) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();
  
  const { language } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
      const years = config.calendarYears;
      console.log("Running useEffect");
      const data = generateCalendarData(years);
      console.log("Generated YearData");
      setCalendarData(data);
  }, []);
  
  return(
    <h2>Calendar goes here</h2>
  )

  // const onSubmit = async (data) => {
  //   setErrorMessage(null);
  //   console.log(`weeks contains ${weeks.weeks.length} elements.`);
  //   if (weeks.weeks.length === 0) {
  //     setErrorMessage(language === "fr" ? "Vous devez sélectionner une ou plusieurs semaines"  : "You must select one or more weeks");
  //     return;
  //   }
    
  //   const formData = new FormData();
    
  //   formData.append("access_key", config.formKey);
    
  //   Object.entries(data).forEach(([key, value]) => {
  //     formData.append(key, value);
  //   });
  //   formData.append('dates', weeks.weeks.join('\r\n'));
  //   let object = Object.fromEntries(formData);
  //   object.subject = `Booking request from ${object.name ? object.name : "unknown"} for Oléron Villa`;
  //   object.redirect = "https://www.oleronvilla.com/";
  //   const json = JSON.stringify(object);
    
  //   console.log(`Submit`);
  //   console.log(`language: ${language}`);
    
  //   try {
  //     const res = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: json,
  //     });
  //     const result = await res.json();
  //     if (res.ok && result.success) {
  //       reset(); // Reset the form on success
  //     } else {
  //       setErrorMessage(`${language === "fr" ? "Échec de l'envoi du message" : "Failed to send message"} : ${result.message}`);
  //     }
  //   } catch (error) {
  //     setErrorMessage(`${language === "fr" ? "Échec de l'envoi du message" : "Failed to send message"} : ${error.message}`);
  //   }
  // };
  
  // return (
  //   <div className='space-above'>
  //   {isSubmitSuccessful && !errorMessage ? (
  //     <h2 className="text-success">Votre message a été envoyé avec succèss!</h2>
  //   ) : (
  //     <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
  //     <div className="responsive-form">
  //     {/* Email Field */}
  //     <div className="med-field">
  //     <label htmlFor="email" className="form-label">Email</label>
  //     <input
  //     id="email"
  //     type="email"
  //     className={`form-control ${errors.email ? 'is-invalid' : ''}`}
  //     {...register('email', {
  //       required: `${language === "fr" ? "Veuillez entrer une adresse email" : "Email address required"}`,
  //       pattern: {
  //         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //         message: `${language === "fr" ? "Veuillez entrer une adresse email" : "Email address required"}`,
  //       },
  //     })}
  //     />
  //     {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
  //     </div>
  //     {/* Optional Phone Number Field */}
  //     <div className="mb-3 med-field">
  //     <label htmlFor="phone" className="form-label">{language === "fr" ? "Numéro de téléphone (facultatif)" : "Phone number (optional)"}</label>
  //     <input
  //     id="phone"
  //     type="tel"
  //     className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
  //     {...register('phone', {
  //       pattern: {
  //         value: /^\+?[0-9]{7,15}$/,
  //         message: `${language === "fr" ? "Veuillez entrer un numéro de téléphone valide" : "Phone number needs to be in a valid form"}`,
  //       },
  //     })}
  //     />
  //     {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
  //     </div>
  //     {/* Name Field */}
  //     <div className="mb-3 med-field">
  //     <label htmlFor="name" className="form-label">{language === "fr" ? "Nom" : "Name"}</label>
  //     <input
  //     id="name"
  //     type="text"
  //     className={`form-control ${errors.name ? 'is-invalid' : ''}`}
  //     {...register('name', { required: `${language === "fr" ? "Veuillez entrer votre nom" : "Please enter a name"}` })}
  //     />
  //     {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
  //     </div>
  //     </div>
  //     {/* Message Field */}
  //     <div className="mb-3">
  //     <label htmlFor="message" className="form-label">{language === "fr" ? "Message (facultatif)" : "Message (optional)"}</label>
  //     <textarea
  //     id="message"
  //     rows={5}
  //     className={`form-control ${errors.message ? 'is-invalid' : ''}`}
  //     {...register('message')}
  //     />
  //     {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
  //     </div>
  //     <div className="mb-3">
  //     <h4>{ language === "fr" ? "A noter que €150 seront ajoutés à votre facture pour participer aux frais de ménage de la maison entre les invités." : "Note that €150 will be added to your bill to contribute to the cost of cleaning the house between guests." }</h4>
  //     </div>
  //     {/* Submit Button */}
  //     <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
  //     {isSubmitting ? 
  //       language === "fr" ? "Envoi en cours..." : "Sending..." :
  //       language === "fr" ? "Demander une réservation" : "Request booking"
  //     }
  //     </button>
  //     {errorMessage && <div className='error-message'>{errorMessage}</div>}
  //     </form>
  //   )}
  //   </div>
  // );
}
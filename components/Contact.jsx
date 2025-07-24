
'use client'; 

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; // For awesome notifications

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'; // REPLACE WITH YOUR FORM ID!

// IMPORTANT: Replace these with the actual entry IDs you extracted from your Google Form's pre-filled link
const FIELD_NAME_ENTRY_ID = 'entry.123456789'; // Example: entry.123456789 for Name
const FIELD_EMAIL_ENTRY_ID = 'entry.987654321'; // Example: entry.987654321 for Email
const FIELD_MESSAGE_ENTRY_ID = 'entry.456789012'; // Example: entry.456789012 for Message

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading('Sending your message...', { id: 'submitToast' });

    const form = new FormData();
    form.append(FIELD_NAME_ENTRY_ID, formData.name);
    form.append(FIELD_EMAIL_ENTRY_ID, formData.email);
    form.append(FIELD_MESSAGE_ENTRY_ID, formData.message);

    try {
      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors', // Important for cross-origin Google Forms submission
      });

      // Google Forms always returns a successful status with 'no-cors' mode,
      // so we rely on the `fetch` not throwing an error.
      toast.success('Message sent successfully! Thank you.', { id: 'submitToast' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.', { id: 'submitToast' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="max-w-md w-full flex flex-col md:space-y-8 space-y-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 sm:p-10 border border-white border-opacity-20">
        <div>
          <h2 className="text-center md:text-3xl text-2xl font-extrabold text-gray-500">
            Send Us a Message
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            We'd love to hear from you!
          </p>
        </div>
        <form className="mt-4 space-y-6 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="rounded-full border border-white border-opacity-20 shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white bg-opacity-80"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white bg-opacity-80"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white bg-opacity-80"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
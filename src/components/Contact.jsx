import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import { CircularProgress } from '@mui/material'; // Loading spinner from Material-UI

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', tel: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.tel) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setIsSubmitted(false);
    
    // Simulate form submission process
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', tel: '' });
    }, 3000);
  };

  return (
    <div className="relative flex items-top justify-center min-h-[500px]  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column with Contact Information */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg shadow-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">Get in touch:</h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">Fill in the form to start a conversation</p>

              <div className="flex items-center mt-8 text-gray-600">
                <FaMapMarkerAlt className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold">Amravati, Maharashtra, India 444602</div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <FaPhoneAlt className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold">+91 9130263068</div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <FaEnvelope className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold">prathmesh292000@gmail.com</div>
              </div>
            </div>

            {/* Right Column with Form */}
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="py-3 px-4 rounded-lg border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none transition duration-200 ease-in-out"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="py-3 px-4 rounded-lg border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none transition duration-200 ease-in-out"
                  />
                </div>

                {/* Telephone Input */}
                <div className="flex flex-col">
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                    placeholder="Telephone Number"
                    className="py-3 px-4 rounded-lg border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none transition duration-200 ease-in-out"
                  />
                </div>

                {/* Error Message */}
                {error && <div className="text-red-500 text-sm">{error}</div>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} color="white" /> : isSubmitted ? 'Thank you for your message!' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

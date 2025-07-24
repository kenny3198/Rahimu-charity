
import React from 'react';

const DonationSection = () => {
  return (
    <section id='donate' className="bg-gradient-to-br from-green-700 to-teal-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl sm:text-5xl font-extrabold mb-8 leading-tight">
          Support Our Cause
        </h2>
        <p className="md:text-lg text-sm sm:text-xl mb-12 text-green-100">
          Thank you for your interest in supporting Rahimu Charity. Your generosity helps us make a real difference.
          Below are the account details for your convenient donations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Finland Bank Account */}
          <div className="bg-white-600 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="md:text-2xl text-xl font-bold mb-4 text-green-200">Finland Bank Account</h3>
            <p className="text-lg mb-2">
              <span className="font-semibold">Address:</span> Kotikyläntie 4 F 85, 02770 Espoo, Finland
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Account Number:</span> FI8010253000227119
            </p>
            <p className="text-lg">
              <span className="font-semibold">Currency:</span> EUR
            </p>
          </div>

          {/* Ghana Bank Account */}
          <div className="bg-white-600 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="md:text-2xl text-xl font-bold mb-4 text-green-200">Ghana Bank Account</h3>
            <p className="text-lg mb-2">
              <span className="font-semibold">Account Number:</span> 1441004813876
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Bank Name:</span> Ecobank GH
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Branch:</span> Adum-Kumasi, Ghana
            </p>
            <p className="text-lg">
              <span className="font-semibold">Currency:</span> GHS
            </p>
          </div>
        </div>

        {/* Mobile Money Section */}
        <div className="mt-12 bg-white-600 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="md:text-2xl text-xl font-bold mb-4 text-green-200">MTN Mobile Money (Ghana)</h3>
          <p className="text-lg">
            <span className="font-semibold">Mobile Money Number:</span> +233538861461
          </p>
        </div>

        <p className="text-base sm:text-lg mt-12 text-green-200">
          Please ensure that any donations are accompanied by your name and purpose of donation (if applicable) for record-keeping and acknowledgment.
          For any additional assistance, feel free to reach out to Rahimu Charity through their official website or contact channels.
        </p>
      </div>
    </section>
  );
};

export default DonationSection;
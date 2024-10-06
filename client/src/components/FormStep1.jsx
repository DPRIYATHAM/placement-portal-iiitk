// src/components/FormStep1.js
import React from "react";

const FormStep1 = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-black font-ubuntu">
        Details
      </h2>

      <div className="mb-4">
        <input
          className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>

      <div className="mb-4">
        <input
          className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="roll_no"
          type="text"
          placeholder="Roll number"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="college_email"
          type="text"
          placeholder="College email"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="branch"
          type="text"
          placeholder="Branch"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="persEmail"
          type="email"
          placeholder="Personal email"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="phone"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="gender"
          type="text"
          placeholder="Gender"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="dob"
          type="text"
          placeholder="Date of Birth"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="address"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="city"
          type="text"
          placeholder="City"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="state"
          type="text"
          placeholder="State"
        />
      </div>
      <div className="mb-4">
        <input
       className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
       id="pin"
          type="text"
          placeholder="Pincode"
        />
      </div>
    </div>
  );
};

export default FormStep1;

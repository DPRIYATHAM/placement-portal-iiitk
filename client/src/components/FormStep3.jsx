// src/components/FormStep3.js
import React from "react";

const FormStep3 = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-black font-ubuntu">
        Details
      </h2>
      <h2 className="text-1xl font-normal text-left mb-4 px-3 pt-3 text-black font-ubuntu">
        Work Experience{" "}
      </h2>
      <div className="mb-4">
        <input
          className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:border-blue-500"
          id="company"
          type="text"
          placeholder="+ Add"
        />
      </div>
      <h2 className="text-1xl font-normal text-left mb-4 px-3 pt-3 text-black font-ubuntu">
        Relevant Skills{" "}
      </h2>
      <div className="mb-4">
        <input
          className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="skills"
          type="text"
          placeholder="Comma seperated"
        />
      </div>
      <div className="mb-4">
        <input
          className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="codingLang"
          type="text"
          placeholder="Preferred Coding Language"
        />
      </div>
      <h2 className="text-1xl font-normal text-left mb-4 px-3 pt-3 text-black font-ubuntu">
        Resume Link{" "}
      </h2>
      <div className="mb-4">
        <textarea
          className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 resize-none"
          id="skills"
          placeholder="Upload your pdf in Google Drive and share the link with access to Anyone with Link"
          rows="2"
        />
      </div>

      <div className="mb-4">
        <input
          className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="codingLang"
          type="text"
          placeholder="GitHub Profile (URL)"
        />
      </div>
      <div className="mb-4">
        <input
          className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="codingLang"
          type="text"
          placeholder="LinkedIn Profile (URL)"
        />
      </div>

      <h2 className="text-1xl font-normal text-left mb-4 px-3 pt-3 text-black font-ubuntu">
        Awards and Honours{" "}
      </h2>
      <div className="mb-4">
        <input
          className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 resize-none overflow-hidden text-sm"
          id="awards"
          type="text"
          placeholder="+ Add"
        />
      </div>
    </div>
  );
};

export default FormStep3;

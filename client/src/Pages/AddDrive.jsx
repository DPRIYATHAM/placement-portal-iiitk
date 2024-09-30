import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Navbar from "../components/Navbar";
import InputDiv from "../components/InputDiv";
import "./AddDrive.css";

const AddDrive = () => {
  const [driveDetails, setDriveDetails] = useState({
    companyName: "",
    role: "",
    offerType: "",
    locations: "",
    duration: "",
    stipend: "",
    cutoff: "",
    backlogsAllowed: "",
    applicationDeadline: "",
    jobDescription: ""
  });

  const [part, setPart] = useState(1);
  const editorInstance = useRef(null);

  // Initialize EditorJS when part changes to 2
  useEffect(() => {
    if (part === 2 && !editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: "editorjs",
        tools: {
          header: {
            class: Header,
            config: {
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 3
            },
            inlineToolbar: true
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        },
        placeholder: "Start typing the job description here..."
      });
    }

    // Cleanup EditorJS instance when unmounting or going back to part 1
    return () => {
      if (editorInstance.current && part === 1) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, [part]);

  const handleNext = (e) => {
    e.preventDefault();
    setPart(2);
  };

  const handleBack = () => {
    setPart(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editorInstance.current) {
      try {
        const savedData = await editorInstance.current.save();

        const updatedDetails = {
          ...driveDetails,
          applicationDeadline: new Date(driveDetails.applicationDeadline),
          locations: driveDetails.locations.split(",").map((loc) => loc.trim()),
          backlogsAllowed: parseInt(driveDetails.backlogsAllowed),
          cutoff: parseFloat(driveDetails.cutoff),
          jobDescription: savedData
        };

        console.log("Final Drive Details:", updatedDetails);

        // TODO: Send 'updatedDetails' to your backend API

        // Reset form after submission
        setDriveDetails({
          companyName: "",
          role: "",
          offerType: "",
          locations: "",
          duration: "",
          stipend: "",
          cutoff: "",
          backlogsAllowed: "",
          applicationDeadline: "",
          jobDescription: ""
        });
        editorInstance.current.clear(); // Clear editor content
      } catch (error) {
        console.error("Error saving editor content:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriveDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const PartOne = () => (
    <form onSubmit={handleNext} className="space-y-4">
      <InputDiv
        input={driveDetails.companyName}
        setInput={handleInputChange}
        type="text"
        item="companyName"
        label="Company Name"
      />
      <InputDiv
        input={driveDetails.role}
        setInput={handleInputChange}
        type="text"
        item="role"
        label="Role"
      />
      <InputDiv
        input={driveDetails.offerType}
        setInput={handleInputChange}
        type="text"
        item="offerType"
        label="Offer Type"
      />
      <InputDiv
        input={driveDetails.locations}
        setInput={handleInputChange}
        type="text"
        item="locations"
        label="Locations (comma separated)"
      />
      <InputDiv
        input={driveDetails.duration}
        setInput={handleInputChange}
        type="text"
        item="duration"
        label="Duration"
      />
      <InputDiv
        input={driveDetails.stipend}
        setInput={handleInputChange}
        type="text"
        item="stipend"
        label="Stipend"
      />
      <InputDiv
        input={driveDetails.cutoff}
        setInput={handleInputChange}
        type="number"
        item="cutoff"
        label="Cutoff CGPA"
      />
      <InputDiv
        input={driveDetails.backlogsAllowed}
        setInput={handleInputChange}
        type="number"
        item="backlogsAllowed"
        label="Number Of Backlogs Allowed"
      />
      <InputDiv
        input={driveDetails.applicationDeadline}
        setInput={handleInputChange}
        type="date"
        item="applicationDeadline"
        label="Application Deadline"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="p-2 w-[5rem] mt-4 text-white bg-coral-red rounded-md hover:bg-custom-red transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </form>
  );

  const PartTwo = () => (
    <form onSubmit={handleSubmit}>
      <div id="editorjs" className="mt-4"></div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="p-2 text-white w-[5rem] bg-gray-500 rounded-md hover:bg-gray-600 transition-colors duration-300"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="p-2  text-white w-[5rem] bg-coral-red rounded-md hover:bg-custom-red transition-colors duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow flex justify-center items-center py-8">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Add Drive
          </h1>
          <TransitionGroup>
            <CSSTransition
              key={part}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              {part === 1 ? <PartOne /> : <PartTwo />}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default AddDrive;

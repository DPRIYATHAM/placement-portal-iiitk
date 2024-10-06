import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DriveDetails = () => {
  // State for Editor
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // State for form inputs
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    startDate: "",
    endDate: "",
    employmentType: "internship", // Default value for employment type
    location: "",
    duration: "",
    stipend: "",
    ppoOffered: false,
    CTC: "",
    locations: "",
    minimumCGPA: "",
    backlogs: "",
    yearSemester: [],
    stream: [],
    requiredData: []
  });

  // Reusable InputField component defined within the same file
  const InputField = ({ label, type, name, id, className, ...rest }) => {
    return (
      <div className="flex items-center mb-4">
        <label htmlFor={id} className="w-40">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className={`w-full border-2 border-solid border-gray-300 p-1 rounded-md ${className}`}
          value={formData[name]} // Bind value to formData
          onChange={handleChange} // Handle input changes
          {...rest}
        />
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleCheckboxChange = (name, value) => {
    setFormData((prevData) => {
      const currentValues = prevData[name];
      if (currentValues.includes(value)) {
        return {
          ...prevData,
          [name]: currentValues.filter((v) => v !== value)
        };
      } else {
        return {
          ...prevData,
          [name]: [...currentValues, value]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData);
  };

  const SectionOne = () => {
    return (
      <section className="mt-[2rem] p-2 sm:p-8">
        <p className="text-xl font-semibold">Drive Details:</p>
        <div className="flex flex-col order-2 justify-between  sm:flex-row mt-[1rem]">
          {/* Left form section */}
          <div className="w-full sm:w-3/4 mb-4 sm:mb-0">
            <InputField
              label="Company Name:"
              type="text"
              name="companyName"
              id="companyName"
            />
            <InputField label="Roles:" type="text" name="role" id="role" />
            <div className="flex flex-col flex-wrap items-center gap-8 sm:flex-row sm:gap-4 mb-4">
              <div className="flex-1 w-3/8">
                <InputField
                  label="Start Date:"
                  type="date"
                  name="startDate"
                  id="startDate"
                />
              </div>
              <div className="flex-1 w-3/8">
                <InputField
                  label="End Date:"
                  type="date"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div>
          </div>

          {/* Right section with circular file input */}
          <div className="relative order-1 flex items-center justify-center sm:order-2">
            <div className="relative rounded-full w-32 h-32 bg-red-100 flex items-center justify-center">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="text-gray-500">Logo</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const SectionTwo = () => {
    return (
      <section className="p-8">
        <p className="mt-[2rem] text-xl font-semibold">Employment Type:</p>
        <div className="mt-[1rem] flex items-center gap-4 justify-between">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <p className="text-xl">Internship</p>
              <input
                type="radio"
                name="employmentType"
                value="internship"
                checked={formData.employmentType === "internship"}
                onChange={handleChange}
                className="w-4 h-4 accent-gray-500 focus:ring-0 focus:ring-offset-0 border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div>
              <InputField
                label="Location:"
                type="text"
                name="location"
                id="location"
                className={"ml-6"}
              />
              <InputField
                label="Duration:"
                type="text"
                name="duration"
                id="duration"
                className={"ml-6"}
              />
              <InputField
                label="Stipend:"
                type="text"
                name="stipend"
                id="stipend"
                className={"ml-6"}
              />
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <p>PPO</p>
              <input
                type="checkbox"
                id="ppo-offered"
                name="ppoOffered"
                checked={formData.ppoOffered}
                onChange={handleChange}
                className="h-4 w-4"
              />
            </div>
            <div className="mt-4">
              <InputField
                label="CTC:"
                type="text"
                name="CTC"
                id="CTC"
                className={"ml-6"}
                disabled={!formData.ppoOffered} // Disable if PPO is not offered
              />
              <InputField
                label="Location(s):"
                type="text"
                name="locations"
                id="locations"
                className={"ml-6"}
                disabled={!formData.ppoOffered} // Disable if PPO is not offered
              />
            </div>
          </div>

          <hr className="w-[1px] h-[18rem] bg-black/20" />

          <div>
            <div className="flex gap-2 items-center">
              <p className="text-xl">Full Time</p>
              <input
                type="radio"
                name="employmentType"
                value="fulltime"
                checked={formData.employmentType === "fulltime"}
                onChange={handleChange}
                className="w-4 h-4 accent-gray-500 focus:ring-0 focus:ring-offset-0 border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div className="mt-4">
              <InputField
                label="CTC:"
                type="text"
                name="CTC"
                id="CTC"
                className={"ml-6"}
              />
              <InputField
                label="Location(s):"
                type="text"
                name="locations"
                id="locations"
                className={"ml-6"}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const SectionThree = () => {
    return (
      <section className="mt-8 p-8">
        <p className="text-xl font-semibold">About Work:</p>
        <div className="mt-[2rem]">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarClassName="toolbar-class"
            toolbar={{
              options: [
                "inline",
                "blockType",
                "list",
                "textAlign",
                "link",
                "history"
              ],
              inline: { options: ["bold", "italic", "underline"] },
              blockType: {
                options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"]
              },
              list: { options: ["unordered", "ordered"] }
            }}
            editorStyle={{
              height: "15rem",
              overflow: "auto",
              padding: "0 16px",
              backgroundColor: "white"
            }}
          />
        </div>
      </section>
    );
  };

  const CheckBox = ({ label, name, options }) => {
    return (
      <div className="flex items-center mb-4">
        <label className="w-40 mr-6">{label}</label>
        <div className="flex flex-wrap gap-4 items-center">
          {" "}
          {/* Added items-center to align items */}
          {options.map((option, index) => (
            <div key={index} className="flex items-center ">
              <input
                type="checkbox"
                id={`${name}-${index}`}
                name={name}
                value={option.value}
                className="mr-2"
                checked={formData[name].includes(option.value)}
                onChange={handleCheckboxChange.bind(null, name, option.value)}
              />
              <label htmlFor={`${name}-${index}`}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const yearSemesterOptions = [
    { value: "1st", label: "1st year (SEM I-II)" },
    { value: "2nd", label: "2nd year (SEM III-IV)" },
    { value: "3rd", label: "3rd year (SEM V-VI)" },
    { value: "4th", label: "4th year (SEM VII-VIII)" }
  ];

  const stream = [
    { value: "CSE", label: "CSE" },
    { value: "CSY", label: "CSY" },
    { value: "AIDS", label: "AI-DS" },
    { value: "ECE", label: "ECE" }
  ];

  const requiredData = [
    { value: "name", label: "Name" },
    { value: "gender", label: "Gender" },
    { value: "roll", label: "Roll Number" },
    { value: "email", label: "Email Id" },
    { value: "personalEmail", label: "Personal Email Id" },
    { value: "cgpa", label: "CGPA" },
    { value: "backlogs", label: "Backlogs" },
    { value: "phone", label: "Phone Number" },
    { value: "resume", label: "Resume" },
    { value: "batch", label: "Batch" },
    { value: "branch", label: "Branch" },
    { value: "dob", label: "Date of Birth" },
    { value: "12th", label: "12th Percentage" },
    { value: "10th", label: "10th Percentage" },
    { value: "address", label: "Address" },
    { value: "skills", label: "Skills" },
    { value: "work", label: "Work Experience" },
    { value: "github", label: "Github Profile" },
    { value: "linkedin", label: "Linkedin Profile" },
    { value: "location", label: "Location Preference" }
  ];

  const SectionFour = () => {
    return (
      <section className="mt-[2rem] ">
        <div className="p-8">
          <p className="text-xl font-semibold mb-[1rem]">Eligibility:</p>
          <CheckBox
            label="Year/Semester:"
            name="yearSemester"
            options={yearSemesterOptions}
          />
          <CheckBox label={"Stream:"} name={"stream"} options={stream} />
          <InputField
            label="Minimum CGPA:"
            type="text"
            name="minimumCGPA"
            id="minimumCGPA"
          />
          <InputField
            label="Backlogs:"
            type="text"
            name="backlogs"
            id="backlogs"
          />
        </div>
      </section>
    );
  };

  const SectionFive = () => {
    return (
      <section>
        <div className="p-8">
          <div className="flex items-baseline gap-2 mb-4">
            <p className="text-xl font-semibold">Required Student Data:</p>
            <p className="text-xs text-red-600">
              *Select items in order of their sheet placement
            </p>
          </div>
          <CheckBox label="" name="requiredData" options={requiredData} />
        </div>

        {/* Container for displaying selected data */}
        <div
          className={`mx-8 bg-coral-red/20 rounded-lg p-2 min-h-[5rem] flex flex-wrap gap-2 ${
            formData.requiredData.length > 0 ? "block" : "hidden"
          }`}
        >
          {/* Display selected data with wrapping */}
          {formData.requiredData.map((data, index) => (
            <span key={index} className="bg-coral-red/50 p-1 rounded-md">
              {data}
            </span>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white-400 w-[80vw] rounded-lg my-10 p-4 font-ubuntu">
      <h1 className="text-3xl text-center font-bold">Create Drive</h1>
      <form onSubmit={handleSubmit}>
        <SectionOne />
        <hr className="w-[90%] mx-auto border-0 h-[1px] bg-black/30" />
        <SectionTwo />
        <hr className="w-[90%] mx-auto border-0 h-[1px] bg-black/30" />
        <SectionThree />
        <hr className="w-[90%] mx-auto border-0 h-[1px] bg-black/30" />
        <SectionFour />
        <hr className="w-[90%] mx-auto border-0 h-[1px] bg-black/30" />
        <SectionFive />
      </form>
      <div className="flex items-center justify-center m-4">
        <button
          type="submit"
          className="bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DriveDetails;

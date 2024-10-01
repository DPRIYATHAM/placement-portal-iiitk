import React from "react";
import Google from "../assets/Google.png";
import JobSummaryCard from "./JobSummaryCard";
import JobDetails from "./JobDetails";
import ExperienceSection from "./ExperienceSection";

import { useState } from "react";
import Results from "./Results";

export default function RightPanel({ user, arr, info }) {
  function handleClick(event) {
    let curr = event.currentTarget.id;
    setCurrentTab(curr);
  }
  const [currentTab, setCurrentTab] = useState("experiences");

  const job = {
    logo: Google,
    company: "GOOGLE",
    type: "Full-Time",
    position: "Software Engineer",
    location: "Bangalore",
    duration: "6 Months",
    salary: "1,25,000/month",
    deadline: "30/06/2024",
    applicants: "140",
    ppo: "1,00,000",
    deadlineTime: "5 PM IST"
  };

  return (
    <div className="flex flex-col items-start mt-0">
      <JobSummaryCard job={job} />
      <JobDetails details={details} stud_info={info} />
      <hr className=" mt-8 mx-12 right-0 w-full  border-1 border-solid rounded-xl  " />
      <div className=" w-full font-ubuntu">
        {/* Banner Container */}
        <div className=" mx-12 right-0 w-[65%] border-gray-100  p-4 rounded-xl mt-2 mb-2">
          <div className="flex align-middle ">
            <div
              id="results"
              className={`flex justify-center border-2 mx-0 ${
                currentTab === "results"
                  ? "text-custom-red border-b-custom-red"
                  : ""
              } cursor-pointer  border-x-transparent border-t-transparent px-5 py-3`}
              onClick={handleClick}
            >
              <h1 className="font-medium text-lg">Results</h1>
            </div>
            <div
              id="experiences"
              className={`flex mx-0 justify-center border-2  ${
                currentTab === "experiences"
                  ? "text-custom-red border-b-custom-red"
                  : ""
              } cursor-pointer border-x-transparent border-t-transparent px-5 py-3`}
              onClick={handleClick}
            >
              <h1 className="font-medium text-lg">Experiences</h1>
            </div>
          </div>
        </div>
      </div>
      {currentTab === "experiences" ? (
        <ExperienceSection user={user} arrayExp={arr} />
      ) : (
        <Results />
      )}
    </div>
  );
}

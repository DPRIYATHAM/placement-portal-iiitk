import React from "react";
import Google from "../assets/Google.png";
import CompanyBanner from "./CompanyBanner";
import AboutWork from "./AboutWork";
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
    type: "Internship",
    position: "Software Engineer",
    location: "Bangalore",
    duration: "6 Months",
    salary: "1,25,000/month",
    deadline: "30/06/2024",
    applicants: "140",
    ppo: "1,00,000",
    deadlineTime: "5 PM IST"
  };

  const details = {
    about: `As a Full Stack Developer at Google company, you will have the opportunity to work on cutting-edge projects and collaborate with a talented team of professionals. We are looking for someone who is proficient in JavaScript, Node.js, ReactJS, HTML, CSS, MongoDB, Python, PHP, MySQL, AngularJS, and Bubble.io.

        Key Responsibilities:
        1. Develop and maintain web applications using the latest technologies and best practices.
        2. Collaborate with cross-functional teams to design and implement new features.
        3. Optimize applications for maximum speed and scalability.
        4. Troubleshoot and debug issues to ensure a seamless user experience.
        5. Stay up-to-date with industry trends and advancements in web development.
        6. Contribute to the overall architecture and design of our software products.
        7. Participate in code reviews and provide constructive feedback to team members.
        8. Work closely with product managers and designers to ensure the best user experience.
        9. Implement security best practices to protect user data and application integrity.
        10. Build reusable components and front-end libraries for future use.
        11. Write and maintain documentation to support the development process and end-users.
        12. Engage in performance tuning and load testing to ensure reliability during high traffic.
        13. Automate testing and deployment pipelines to streamline development workflows.
        14. Mentor junior developers and contribute to internal knowledge-sharing sessions.
        15. Research and propose improvements in development methodologies to increase efficiency and code quality.`,
    cgpa: 7,
    backlogs: 0,
    batch: 2021,
    branches: "cse,ece,csy,csd",
    duration: "6 months",
    ctc: "1,25,000/month",
    location: "Bangalore",
    deadline: "30/06/2024",
    start: "30/05/2024",
    end: "15/07/2024",
    type: user
  };

  return (
    <div className="flex flex-col items-start mt-0">
      <CompanyBanner job={job} />
      <AboutWork details={details} stud_info={info} />
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
        <ExperienceSection user={user} array_exp={arr} />
      ) : (
        <Results />
      )}
    </div>
  );
}

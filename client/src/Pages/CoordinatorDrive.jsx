import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard/JobListCard.jsx";
import JobSummaryCard from "../components/JobSummaryCard";
import JobDetails from "../components/JobDetails";
import StudentDriveForm from "../components/StudentDriveForm.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import Results from "../components/Results.jsx";
import Google from "../assets/Google.png";
import styles from "./StudentDrive.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import data from "../../data.js";

const StudentDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(id ? parseInt(id) : 1);
  const [formDisplay, setFormDisplay] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentTab, setCurrentTab] = useState("experiences");
  const [display, setDisplay] = useState("1");

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
    end: "15/07/2024"
  };

  const experienceArray = [
    {
      id: 1,
      name: "Name",
      date: "date",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      id: 2,
      name: "Name",
      date: "date",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      id: 3,
      name: "Name",
      date: "date",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ];

  const stud_info = {
    fullname: "John Doe",
    email: "johnbcs82@iiitkottayam.ac.in",
    cgpa: "7.8",
    result10th: "35",
    result12th: "35",
    course: "CSE"
  };

  const handleCardClick = (id) => {
    setSelectedCard(id);
    navigate(`/coordinator/drive/${id}`);
    setDisplay((prev) => (prev === "1" ? "2" : "1"));
  };

  const handleFormClick = () => {
    setFormDisplay(!formDisplay);
  };

  const handleClick = (event) => {
    const curr = event.currentTarget.id;
    setCurrentTab(curr);
  };

  const handleBackClick = () => {
    setDisplay("1");
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SectionOne = () => {
    return (
      <section
        className={`h-[90%] w-full overflow-y-auto ${styles.scrollbarHide} sm:w-[35vw]`}
      >
        {data.map((job) => (
          <div
            key={job.id}
            className={`cursor-pointer ${
              selectedCard === job.id ? "bg-coral-red/20" : "bg-white"
            }`}
            onClick={() => handleCardClick(job.id)}
          >
            <JobListCard job={job} id={selectedCard} />
          </div>
        ))}
      </section>
    );
  };

  const SectionTwo = () => {
    return (
      <section className="h-[90%] flex-1 overflow-y-auto overflow-x-hidden">
        <JobSummaryCard job={job} />
        {!formDisplay ? (
          <JobDetails details={details} stud_info={stud_info} />
        ) : (
          <StudentDriveForm
            details={stud_info}
            handleFormClick={handleFormClick}
          />
        )}
        <div className="flex w-full justify-center mt-4">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-end">
              <div className="flex mr-[3rem] rounded-md px-3 py-1 items-center">
                <BsDownload className="text-custom-red" />
                &ensp; <h3 className="text-custom-red"> Download results</h3>
              </div>
            </div>
            <div className="flex gap-20 justify-center">
              <button className="button-31 pt-4" role="button">
                Edit Drive
              </button>
              <button className="button-31 pt-4" role="button">
                End Drive
              </button>
            </div>
          </div>
        </div>
        <div className="mx-12 right-0 w-[65%] border-gray-100 p-4 rounded-xl mt-2 mb-2">
          <div className="flex align-middle">
            <div
              id="results"
              className={`flex justify-center border-2 mx-0 ${
                currentTab === "results"
                  ? "text-custom-red border-b-custom-red"
                  : ""
              } cursor-pointer border-x-transparent border-t-transparent px-5 py-3`}
              onClick={handleClick}
            >
              <h1 className="font-medium text-lg">Results</h1>
            </div>
            <div
              id="experiences"
              className={`flex mx-0 justify-center border-2 ${
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
        {currentTab === "experiences" ? (
          <ExperienceSection user={"coordinator"} arrayExp={experienceArray} />
        ) : (
          <Results />
        )}
      </section>
    );
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      {screenWidth > 768 ? (
        <div className="relative h-screen overflow-hidden">
          <div className="flex h-[calc(100vh-64px)]">
            <section
              className={`h-[90%] w-[35vw] overflow-y-auto ${styles.scrollbarHide}`}
            >
              {data.map((job) => (
                <div
                  key={job.id}
                  className={`cursor-pointer ${
                    selectedCard === job.id ? "bg-coral-red/20" : "bg-white"
                  }`}
                  onClick={() => handleCardClick(job.id)}
                >
                  <JobListCard job={job} id={selectedCard} />
                </div>
              ))}
            </section>
            <section className="h-[90%] flex-1 overflow-y-auto overflow-x-hidden">
              <JobSummaryCard job={job} />
              {!formDisplay ? (
                <JobDetails details={details} stud_info={stud_info} />
              ) : (
                <StudentDriveForm
                  details={stud_info}
                  handleFormClick={handleFormClick}
                />
              )}
              <div className="flex w-full justify-center mt-4">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex justify-end">
                    <div className="flex mr-[3rem] rounded-md px-3 py-1 items-center">
                      <BsDownload className="text-custom-red" />
                      &ensp;{" "}
                      <h3 className="text-custom-red"> Download results</h3>
                    </div>
                  </div>
                  <div className="flex gap-20 justify-center">
                    <button className="button-31 pt-4" role="button">
                      Edit Drive
                    </button>
                    <button className="button-31 pt-4" role="button">
                      End Drive
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-12 right-0 w-[65%] border-gray-100 p-4 rounded-xl mt-2 mb-2">
                <div className="flex align-middle">
                  <div
                    id="results"
                    className={`flex justify-center border-2 mx-0 ${
                      currentTab === "results"
                        ? "text-custom-red border-b-custom-red"
                        : ""
                    } cursor-pointer border-x-transparent border-t-transparent px-5 py-3`}
                    onClick={handleClick}
                  >
                    <h1 className="font-medium text-lg">Results</h1>
                  </div>
                  <div
                    id="experiences"
                    className={`flex mx-0 justify-center border-2 ${
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
              {currentTab === "experiences" ? (
                <ExperienceSection
                  user={"coordinator"}
                  arrayExp={experienceArray}
                />
              ) : (
                <Results />
              )}
            </section>
          </div>
          <style jsx>{`
            .${styles.scrollbarHide}::-webkit-scrollbar {
              display: none;
            }
            .${styles.scrollbarHide} {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      ) : display === "1" ? (
        <SectionOne />
      ) : (
        <div>
          <div>
            <button
              className="flex align-middle items-center justify-center gap-1 m-2 h-[1.5rem]"
              onClick={handleBackClick}
            >
              <IoChevronBackOutline />
              <h1>Back</h1>
            </button>
          </div>
          <SectionTwo />
        </div>
      )}
    </>
  );
};

export default StudentDrive;

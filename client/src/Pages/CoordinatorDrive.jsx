import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard/JobListCard";
import JobSummaryCard from "../components/JobSummaryCard";
import JobDetails from "../components/JobDetails";
import StudentDriveForm from "../components/StudentDriveForm";
import ExperienceSection from "../components/ExperienceSection";
import Results from "../components/Results";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { job, details, studentInfo, experienceArray } from "../../data";
import data from "../../data";
import styles from "./StudentDrive.module.css";

const StudentDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(id ? parseInt(id) : 1);
  const [formDisplay, setFormDisplay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentTab, setCurrentTab] = useState("experiences");
  const [display, setDisplay] = useState("1");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      if (width > 768) {
        setDisplay("both");
      } else {
        setDisplay(display === "both" ? "1" : display);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, [display]);

  const handleCardClick = (id) => {
    setSelectedCard(id);
    navigate(`/coordinator/drive/${id}`);
    if (isMobile) {
      setDisplay("2");
    }
  };

  const toggleFormDisplay = () => setFormDisplay(!formDisplay);

  const handleTabClick = (event) => setCurrentTab(event.currentTarget.id);

  const JobList = () => (
    <section
      className={`h-[90%] overflow-y-auto ${styles.scrollbarHide} ${
        isMobile ? "w-full" : "w-[35vw]"
      }`}
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

  const TabSection = () => (
    <div className="mx-12 right-0 w-[65%] border-gray-100 p-4 rounded-xl mt-2 mb-2">
      <div className="flex align-middle">
        {["results", "experiences"].map((tab) => (
          <div
            key={tab}
            id={tab}
            className={`flex justify-center border-2 mx-0 ${
              currentTab === tab ? "text-custom-red border-b-custom-red" : ""
            } cursor-pointer border-x-transparent border-t-transparent px-5 py-3`}
            onClick={handleTabClick}
          >
            <h1 className="font-medium text-lg">
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );

  const DetailSection = () => (
    <section className="h-[90%] flex-1 overflow-y-auto overflow-x-hidden">
      <JobSummaryCard job={job} />
      {formDisplay ? (
        <StudentDriveForm
          details={studentInfo}
          handleFormClick={toggleFormDisplay}
        />
      ) : (
        <JobDetails details={details} studentInfo={studentInfo} />
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
      <TabSection />
      {currentTab === "experiences" ? (
        <ExperienceSection user="coordinator" arrayExp={experienceArray} />
      ) : (
        <Results />
      )}
    </section>
  );

  return (
    <>
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      <div className="relative h-screen overflow-hidden">
        <div className="flex h-[calc(100vh-64px)]">
          {isMobile ? (
            display === "1" ? (
              <JobList />
            ) : (
              <div className="w-full">
                <button
                  className="flex align-middle items-center justify-center gap-1 m-2 h-[1.5rem]"
                  onClick={() => setDisplay("1")}
                >
                  <IoChevronBackOutline />
                  <h1>Back</h1>
                </button>
                <DetailSection />
              </div>
            )
          ) : (
            <>
              <JobList />
              <DetailSection />
            </>
          )}
        </div>
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
    </>
  );
};

export default StudentDrive;

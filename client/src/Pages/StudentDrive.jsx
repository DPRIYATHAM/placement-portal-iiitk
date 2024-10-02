import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard/JobListCard";
import JobSummaryCard from "../components/JobSummaryCard";
import JobDetails from "../components/JobDetails";
import StudentDriveForm from "../components/StudentDriveForm";
import ExperienceSection from "../components/ExperienceSection";
import { IoChevronBackOutline } from "react-icons/io5";
import { data, job, details, studentInfo } from "../../data";
import styles from "./StudentDrive.module.css";

const StudentDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(id ? parseInt(id) : 1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [display, setDisplay] = useState("1");
  const [formDisplay, setFormDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (id) => {
    setSelectedCard(id);
    navigate(`/drive/${id}`);
    setDisplay((prev) => (prev === "1" ? "2" : "1"));
  };

  const toggleFormDisplay = () => setFormDisplay(!formDisplay);

  const JobList = () => (
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

  const DetailSection = () => (
    <section
      className={`h-[90%] flex-1 overflow-y-auto overflow-x-hidden ${
        isMobile ? (display === "1" ? "hidden" : "block") : "block"
      }`}
    >
      <JobSummaryCard job={job} />
      {formDisplay ? (
        <StudentDriveForm
          details={studentInfo}
          handleFormClick={toggleFormDisplay}
        />
      ) : (
        <>
          <JobDetails details={details} stud_info={studentInfo} />
          <div className="flex w-full justify-center mt-4">
            <button className="button-31 pt-4" onClick={toggleFormDisplay}>
              View application
            </button>
          </div>
        </>
      )}
      <ExperienceSection />
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
              <div>
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

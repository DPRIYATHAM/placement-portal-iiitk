import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard/JobListCard.jsx";
import RightPanel from "../components/RightPanel.jsx";
import data from "../../data.js";
import styles from "./StudentDrive.module.css";

const StudentDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(id ? parseInt(id) : 1);

  const handleCardClick = (id) => {
    setSelectedCard(id);
    navigate(`/drive/${id}`); // Corrected this line
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        {/* <Filter /> */}
      </div>
      <div className="flex h-[calc(100vh-64px)]">
        {" "}
        {/* Adjust 64px to match your Navbar height */}
        <section
          className={`h-[90%] w-[35vw] overflow-y-auto ${styles.scrollbarHide}`}
        >
          {data.map((job, index) => (
            <div
              key={index}
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
          <RightPanel user="coordinator" />
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
  );
};

export default StudentDrive;

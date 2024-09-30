import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard/JobListCard.jsx";
import data from "../../data.js";
import styles from "./StudentDrive.module.css";

const StudentDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(id ? parseInt(id) : 1);

  const handleCardClick = (id) => {
    setSelectedCard(id);
    navigate(`/drive/${id}`);
  };

  return (
    <div className="relative h-screen">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>

      <div
        className={`h-[80%] mt-0 w-[35vw] overflow-y-auto fixed ${styles.scrollbarHide}`}
      >
        {data.map((job, index) => (
          <div
            key={index}
            className={`${
              selectedCard === job.id ? "bg-coral-red/20" : "bg-white"
            }`}
            onClick={() => handleCardClick(job.id)}
          >
            <JobListCard job={job} id={selectedCard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDrive;

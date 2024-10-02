import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const DEFAULT_EXPERIENCE = {
  id: 1,
  name: "New Experience",
  date: "New Date",
  content: "New Experience Content"
};

const ExperienceSection = ({ user, arrayExp = [] }) => {
  const [experiences, setExperiences] = useState([]);
  const [expArray, setExpArray] = useState(arrayExp);

  const handleAddExperience = (newExperience = DEFAULT_EXPERIENCE) => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        ...newExperience,
        id: prevExperiences.length + 1
      }
    ]);
  };

  const handleDeleteExperience = (id) => {
    setExpArray((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id !== id)
    );
    toast.success("Experience deleted");
  };

  return (
    <div className="w-full -ml-5 flex items-center font-ubuntu mt-18 sm:ml-0">
      <div className="rounded-xl mt-8 mb-2 sm:mx-12">
        {user === "coordinator" ? (
          expArray.length > 0 ? (
            expArray.map((exp) => (
              <ExperienceCard
                key={exp.id}
                details={exp}
                user={user}
                onDelete={handleDeleteExperience}
              />
            ))
          ) : (
            <p>No experiences available</p>
          )
        ) : (
          <>
            <button
              className="font-medium text-base text-custom-red mb-12 ml-10 cursor-pointer"
              onClick={() => handleAddExperience()}
            >
              + Add experience
            </button>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} details={exp} user={user} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;

import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const defaultExperience = {
  id: 1,
  name: "New Experience",
  date: "New Date",
  content: "New Experience Content"
};

export default function ExperienceSection({ user, array_exp }) {
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      name: "Name",
      date: "date",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ]);
  const [array, setArray] = useState(array_exp);

  const handleAddExperience = (newExperience = defaultExperience) => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        ...newExperience,
        id: prevExperiences.length + 1
      }
    ]);
  };
  const handleDeleteExperience = (id) => {
    setArray((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id != id)
    );
  };

  return (
    <div className="w-full font-ubuntu mt-18">
      <div className=" mx-12 right-0 rounded-xl mt-8 mb-2">
        {user === "coordinator" ? (
          array_exp && array_exp.length > 0 ? (
            array.map((exp) => (
              <ExperienceCard
                key={exp.id}
                details={exp}
                user={user}
                onDelete={handleDeleteExperience}
              />
            ))
          ) : (
            "No experiences available"
          )
        ) : (
          <>
            <h1
              className="font-medium text-base text-custom-red mb-12 ml-10 cursor-pointer"
              onClick={() => handleAddExperience()}
            >
              +Add experience
            </h1>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} details={exp} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

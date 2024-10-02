import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultExperience = {
  id: 1,
  name: "New Experience",
  date: "New Date",
  content: "New Experience Content"
};

export default function ExperienceSection({ user, arrayExp }) {
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      name: "Name",
      date: "date",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ]);
  const [expArray, setExpArray] = useState(arrayExp);

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
    toast.success("Deleted experience");

    setExpArray((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id !== id)
    );
  };

  console.log(expArray);

  return (
    <div className="w-full ml-[-1.2rem]  flex items-center font-ubuntu mt-18 sm:ml-0">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />

      <div className="   rounded-xl mt-8 mb-2 sm:mx-12">
        {user === "coordinator" ? (
          arrayExp && arrayExp.length > 0 ? (
            expArray.map((exp) => (
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

import React, { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ExperienceSection({ user, arrayExp }) {
  const [textAreaInput, handleTextAreaInput] = useState("");
  const [addExperienceClicked, handleAddExperienceClicked] = useState(false);
  const experienceTemplate = {
    id: 1,
    name: "Name",
    date: "date",
    content: "New Experience Content"
  };
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      name: "Name",
      date: "date",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]);
  const [expArray, setExpArray] = useState(arrayExp);
  useEffect(() => {
    // console.log(addExperienceClicked)
  }, [addExperienceClicked, textAreaInput]);

  const handleAddExperience = (e, newExperience = experienceTemplate) => {
    handleAddExperienceClicked((prev) => !prev);
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        ...newExperience,
        id: prevExperiences.length + 1,

        content: textAreaInput
      }
    ]);
  };
  const handleTextAreaChange = (e) => {
    console.log(e.target.value);
    var val = e.target.value;
    handleTextAreaInput(e.target.value);
    console.log(textAreaInput);
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
              className={`font-medium text-base text-custom-red mb-12 ml-10 cursor-pointer ${
                addExperienceClicked ? " hidden" : " block"
              }`}
              onClick={() => {
                handleAddExperienceClicked((prev) => !prev);
              }}
            >
              +Add experience
            </h1>
            {/* {adding editor for posting experiences.} */}
            <div className={`${addExperienceClicked ? " block" : " hidden"}`}>
              <textarea
                name=""
                id=""
                onChange={handleTextAreaChange}
                className=" rounded-lg w-[85%] ml-12 border-2 resize-none border-black/40 outline-none p-4  sm:ml-12 sm:mx-12 sm:w-[90%] "
              />

              <button
                className="mx-12 mt-2 mb-5 button-post"
                onClick={handleAddExperience}
              >
                Post
              </button>
            </div>

            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} details={exp} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

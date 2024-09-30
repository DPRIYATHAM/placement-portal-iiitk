import React, { useEffect, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function ExperienceCard({ details, user, onDelete }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  function handleDelete() {
    if (typeof onDelete === "function") {
      onDelete(details.id);
    } else {
      console.error("onDelete is not a function");
    }
  }

  return (
    <div id={details.id} className="w-full pr-16 font-ubuntu">
      <div className="mr-auto flex gap-3 mx-12 w-full border-2 border-solid p-7 rounded-xl mt-2 mb-2">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="text-gray-400">
              <HiOutlineUserCircle size={45} />
            </div>
            <div>
              <h2
                className="font-medium text-base"
                style={{ color: "rgba(0, 0, 0, 0.71)" }}
              >
                {details.name}
              </h2>
              <h6 className="text-gray-400 text-sm">{details.date}</h6>
            </div>
          </div>

          <p className="text-gray-500 text-sm">{details.content}</p>
          {user === "coordinator" ? (
            <button className="self-start" onClick={handleDelete}>
              <h3 className="text-custom-red text-sm">Delete Experience</h3>
            </button>
          ) : isClicked ? (
            <AiFillHeart size={25} onClick={handleClick} />
          ) : (
            <AiOutlineHeart size={25} onClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
}

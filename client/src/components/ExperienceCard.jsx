import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import Toast from "./Toast";

const ExperienceCard = ({ details, user, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  const handleDelete = () => {
    if (typeof onDelete === "function") {
      onDelete(details.id);
      toast.error("Experience deleted.");
    } else {
      console.error("onDelete is not a function");
    }
  };

  return (
    <div id={details.id} className="w-full pr-16 font-ubuntu">
      <Toast />
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
          ) : (
            <button onClick={handleLikeClick}>
              {isLiked ? (
                <AiFillHeart size={25} className="text-coral-red" />
              ) : (
                <AiOutlineHeart size={25} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

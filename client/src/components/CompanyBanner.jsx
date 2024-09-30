import React from "react";
import Google from '../assets/Google.png';
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { useState } from "react";
import { MdBookmark } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";



function CompanyBanner({ job }) {
    const [isClicked, handleClicked] = useState(false);
    function handleClick() {
        handleClicked((prev) => {
            return !prev;
        })
    }
    return (
        <div className=" w-full font-ubuntu">
            {/* Banner Container */}
            <div className=' ml-auto  mx-12 right-0 w-[65%] border-gray-100 border-2 border-solid p-4 rounded-xl mt-2 mb-2'>
                <div className='w-12 float-left mr-4 mb-2 py-4 mx-6 sm:w-16'>
                    <img src={job.logo} alt={job.company} className='w-full h-auto ' />
                </div>
                <div className='flex flex-col gap-5 sm:gap-5'>
                    <div className='flex flex-row sm:flex-row justify-between sm:items-center gap-2 sm:gap-4'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row sm:flex-row sm:items-center gap-4'>
                                <div className='  sm:2xl  text-3xl font-bold '>{job.company}</div>
                                <div className='text-red-500 mx-5 px-5 border-red-500 border-2 py-1 my-3 text-xs w-fit'>{job.type}</div>
                            </div>
                            <div className='text-gray-500 text-sm sm:text-base'>{job.position}</div>
                        </div>
                    </div>
                    {job.type === 'Intern + PPO' ? (
                        <>
                            <div className='flex flex-col gap-2 '>
                                <div className='font-semibold flex flex-col sm:flex-row gap-1 sm:gap-2'>
                                    <span>Intern:</span>
                                    <div className='flex flex-wrap gap-2 sm:gap-4'>
                                        <div className='flex items-center text-gray-500 gap-1 text-sm'>
                                            <CiLocationOn /><span>{job.location}</span>
                                        </div>
                                        <div className='flex items-center text-gray-500 gap-1 text-sm'>
                                            <SlCalender />{job.duration}
                                        </div>
                                        <div className='flex items-center text-gray-500 gap-1 text-sm'>
                                            <BsCurrencyRupee />{job.salary}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='font-semibold flex flex-col sm:flex-row gap-1 sm:gap-2'>
                                    <span>PPO:</span>
                                    <div className='flex flex-wrap gap-2 sm:gap-4'>
                                        <div className='flex items-center text-gray-500 gap-1 text-base'>
                                            <CiLocationOn /><span>{job.location}</span>
                                        </div>
                                        <div className='flex items-center text-gray-500 gap-1 text-base'>
                                            <BsCurrencyRupee />{job.ppo}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='font-semibold flex flex-wrap gap-2 sm:gap-4'>
                            <div className='flex items-center text-gray-500 text-base font-normal gap-1 '>
                                <CiLocationOn size={23} />{job.location}
                            </div>
                            <div className='flex items-center font-normal text-gray-500 gap-2 text-base'>
                                <SlCalender size={23}  />{job.duration}
                            </div>
                            <div className='flex items-center font-normal text-gray-500 gap-1 text-base'>
                                <BsCurrencyRupee size={23}/>{job.salary}
                            </div>
                        </div>
                    )}
                    <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-4'>
                        <div className='text-red-500 font-normal text-base'>Apply before {job.deadline} { job.deadlineTime}</div>
                    </div>
                    <div className="text-base flex justify-between text-gray-500">
                        <div>
                            <FaUsers size={23} className="float-left mr-3" />{job.applicants} applicants
                        </div>
                        {/* Aligning the bookmark and share icons on the right */}
                        <div className="flex items-center gap-4 mr-6">
                            {isClicked ?
                        <MdBookmark size={25} onClick={handleClick} />: <MdOutlineBookmarkBorder size={25} onClick={handleClick} />}
                            <GoShareAndroid size={25}  />
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
        </div>
    );
}

export default CompanyBanner;
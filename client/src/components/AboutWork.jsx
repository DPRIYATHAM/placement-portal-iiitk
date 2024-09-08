import React from "react";
import { BsDownload } from "react-icons/bs";
import StudentDriveForm from "./StudentDriveForm";
import { useState } from "react";




export default function AboutWork({ details,stud_info }) {
    const experience = {
        name: 'Name',
        date: 'date',
        content:`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
    const [formDisplay, handleDisplayForm] = useState(false);
    function handleClick() {
        handleDisplayForm(true)

        
    }
    
    
    return (
        <div className="w-full font-ubuntu">
            <div className={`ml-auto mx-12 right-0 w-[65%]  rounded-xl mt-2 mb-2 relative`}>
                {
                    formDisplay ?
                    <StudentDriveForm details={stud_info} />
                :<div className="ml-7">
                    <h1 className="font-medium text-xl text-custom-red">About the work</h1>
                    <p className="mt-3" style={{ color: 'rgba(134, 134, 134, 1)', whiteSpace: 'pre-wrap' }}>{details.about}</p>
                    <div style={{ color: 'rgba(134, 134, 134, 1)' }}>
                        <h3 className="font-medium text-lg mb-5 mt-6 text-custom-red">Eligibility</h3>
                        <div className="ml-4 flex flex-col gap-2">
                            <p>CGPA:&emsp;{details.cgpa}</p>
                            <p>Backlogs:&emsp;{details.backlogs}</p>
                            <p>Batch:&emsp;{details.batch}</p>
                            <p>Branches:&emsp;{details.branches}</p>
                        </div>
                    </div>
                    <div style={{ color: 'rgba(134, 134, 134, 1)' }}>
                        <h3 className="font-medium text-lg mb-5 mt-6 text-custom-red">Salary</h3>
                        <div className="ml-4 flex flex-col gap-2">
                            <p>Duration:&emsp;{details.duration}</p>
                            <p>CTC:&emsp;{details.ctc}</p>
                            <p>Location:&emsp;{details.location}</p>
                        </div>
                    </div>
                    <div style={{ color: 'rgba(134, 134, 134, 1)' }}>
                        <h3 className="font-medium text-lg mb-5 mt-6 text-custom-red">Time-Line:</h3>
                        <div className="ml-4 flex flex-col gap-2 mb-3">
                            <p>Apply before:&emsp;{details.deadline}</p>
                            <p>Start Date&emsp;{details.start}</p>
                            <p>End Date:&emsp;{details.end}</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-4">
                        {details.type === 'coordinator' ?
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex justify-end">
                                    <div className=" flex   rounded-md px-3 py-1 items-center">
                                    <BsDownload className="text-custom-red" />&ensp; <h3 className="text-custom-red"> Download results</h3>
                                    </div>
                                </div>
                                <div className="flex gap-20 justify-center">
                                    <button className="button-31 pt-4" role="button">Edit Drive</button>
                                    <button className="button-31 pt-4" role="button">End Drive</button>
                                </div>
                            </div>
                            :
                            
                            <button className="button-31 pt-4" role="button" onClick={handleClick} >View application</button> 
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
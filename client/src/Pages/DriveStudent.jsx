import React from "react";
import RightPanel from "../components/RightPanel";

export default function DriveStudent() {
    const user = { type: 'student' }; // Updated variable name to 'user' to match the prop name in RightPanel
    const details = {
        fullname: 'John Doe',
        email: 'johnbcs82@iiitkottayam.ac.in',
        
        cgpa:'7.8',
        
        result10th: '35',
        result12th: '35',
        course: 'CSE',
    }

    return (
        <>
            <RightPanel user='student' info={details} />  {/* Pass the user object as a prop */}
        </>
    );
}

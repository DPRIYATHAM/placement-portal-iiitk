import React, { useState } from 'react';
import { ArrowLeft, Edit } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";


const Profile = () => {
  const [activeTab, setActiveTab] = useState('Basic Details');
  const [basicDetails, setBasicDetails] = useState({
    Name: '', 'Roll number': '', 'College email': '', Program: '', Branch: '', Batch: '',
    'Personal email': '', Phone: '', Gender: '', 'Date of birth': '', Address: '', City: ''
  });
  const [educationalDetails, setEducationalDetails] = useState({
    'Roll number': '', Course: '', CGPA: '', 'Graduation year': '', Backlogs: '',
    '10th': { Degree: '10th', CGPA: '', Institute: '', 'Passing year': '', Board: '' },
    '12th': { Degree: '12th', CGPA: '', Institute: '', 'Passing year': '', Board: '' },
    'Btech': { Degree: 'Btech', CGPA: '', Institute: '', 'Passing year': '', Board: '' },
    'PG': { Degree: 'PG', CGPA: '', Institute: '', 'Passing year': '', Board: '' }
  });

  const tabs = ['Basic Details', 'Educational Details', 'Additional Details', 'History'];

  const handleInputChange = (section, field, value, degree = null) => {
    if (section === 'basicDetails') {
      setBasicDetails(prev => ({ ...prev, [field]: value }));
    } else if (section === 'educationalDetails') {
      if (degree) {
        setEducationalDetails(prev => ({
          ...prev,
          [degree]: { ...prev[degree], [field]: value }
        }));
      } else {
        setEducationalDetails(prev => ({ ...prev, [field]: value }));
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Basic Details':
        return (
          <div className="space-y-4 w-full">
            <div className='flex justify-end'>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-md">
                Edit
              </button>
            </div>
            {Object.keys(basicDetails).map((item) => (

              <div key={item} className="flex items-center space-x-4">
                <label className="text-sm font-semibold w-1/3">{item}:</label>
                <input
                  type="text"
                  value={basicDetails[item]}
                  onChange={(e) => handleInputChange('basicDetails', item, e.target.value)}
                  className="flex-grow p-2 border rounded-md text-sm"
                  placeholder={`Enter ${item.toLowerCase()}`}
                />
              </div>
            ))}
          </div>
        );
      case 'Educational Details':
        return (
          <div className="space-y-4 w-full">
            <div className='flex justify-end'>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-md">
                Edit
              </button>
            </div>
            {['Roll number', 'Course', 'CGPA', 'Graduation year', 'Backlogs'].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <label className="text-sm font-semibold w-1/3">{item}:</label>
                <input
                  type="text"
                  value={educationalDetails[item]}
                  onChange={(e) => handleInputChange('educationalDetails', item, e.target.value)}
                  className="flex-grow p-2 border rounded-md text-sm"
                  placeholder={`Enter ${item.toLowerCase()}`}
                />
              </div>
            ))}
            <div className="grid grid-cols-5 gap-5 text-sm font-semibold">
              <div>Degree</div>
              <div>CGPA/Percentage</div>
              <div>Institute</div>
              <div>Passing year</div>
              <div>Board</div>
            </div>
            {['10th', '12th', 'Btech', 'PG'].map((degree) => (
              <div key={degree} className="grid grid-cols-5 gap-4 text-sm">
                <div>{degree}</div>
                {['CGPA', 'Institute', 'Passing year', 'Board'].map((field) => (
                  <input
                    key={field}
                    type="text"
                    value={educationalDetails[degree][field]}
                    onChange={(e) => handleInputChange('educationalDetails', field, e.target.value, degree)}
                    className="p-2 border rounded-md"
                    placeholder={`Enter ${field.toLowerCase()}`}
                  />
                ))}
              </div>
            ))}
          </div>
        );
      case 'Additional Details':
        return (
          <div className="space-y-6 flex flex-col w-full">
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center'>
                <div className="flex space-x-2 mx-56">
                  <a href="#"><FaLinkedin size={28} className="text-blue-600" /></a>
                  <a href="#"><FaGithub size={28} /></a>
                </div>
              </div>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-md">
                Edit
              </button>
            </div>
            <div className='flex justify-between'>
              <div className='flex justify-center items-center'>
                <button className="px-4 py-2 text-sm text-white bg-black rounded-md w-fit">
                  Resume →
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-md space-y-2 px-20 py-5 flex flex-col justify-start items-start">
                <h3 className="font-medium text-red-500">Offers in hand</h3>
                <h3 className="font-medium text-red-500">Drives applied</h3>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Skills</h3>
              <ul className="space-y-1 bg-gray-100 p-4 rounded-md list-none">
                {['Lorem ipsum dolor sit amet', 'Sed dignissim, metus nec fringilla accumsan,', 'consectetur adipiscing elit.', 'isus sem sollicitudin lacus,'].map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 -mt-1 text-2xl">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Work experience</h3>
              <ul className="space-y-1 bg-gray-100 p-4 rounded-md list-none">
                {['Lorem ipsum dolor sit amet', 'Sed dignissim, metus nec fringilla accumsan,', 'isus sem sollicitudin lacus,'].map((experience, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 -mt-1 text-2xl">•</span>
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'History':
        return (
          <div className="w-full">
            <div className='flex justify-end'>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-md">
                Edit
              </button>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[...Array(7)].map((_, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-red-50' : ''}>
                    <td className="py-3">{index + 1}</td>
                    <td className="py-3">Company name</td>
                    <td className="py-3">{index === 4 || index === 6 ? 'Internship' : 'Placement'}</td>
                    <td className="py-3">Status</td>
                    <td className="py-3">
                      <button className="px-3 py-1 text-xs text-white bg-red-500 rounded-md">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-200 p-4">
        <ArrowLeft className="text-gray-600" />
      </div>
      <div className="relative h-32 bg-gray-200">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-36 h-36 bg-red-100 rounded-full flex items-center justify-center text-red-400">
            Edit photo
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className="w-[600px] mt-20 flex flex-col items-start px-4 mb-10">
          <div className="flex justify-between w-full mb-4">
            <div className="flex space-x-14">
              {['Basic Details', 'Educational Details', 'Additional Details', 'History'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${activeTab === tab
                      ? 'text-red-500 border-b-2 border-red-500 font-medium'
                      : 'text-gray-600'
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
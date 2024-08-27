import React, { useState } from 'react';
import filter from '../assets/Vector.png';
import { FaSearch, FaCheck } from 'react-icons/fa';

const Filter = () => {
    const [status, setStatus] = useState([]);
    const [type, setType] = useState([]);
    const [location, setLocation] = useState([]);
    const [batch, setBatch] = useState([]);

    const toggleSelection = (option, selectedOptions, setSelectedOptions) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className='p-6 mx-5 w-full'>
            <div className='border-gray-200 border-3 shadow-[0_0_20px_rgba(0,0,0,0.3)] p-4 rounded-xl'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='image flex items-center gap-1 font-semibold text-lg'>
                        <img src={filter} alt="filter" className='h-4' />Filters
                    </div>
                    <div className='Search w-full max-w-md'>
                        <div className="relative flex items-center w-full mx-auto md:flex">
                            <FaSearch className="absolute left-3 text-gray-400 font-normal" />
                            <input
                                type="text"
                                placeholder="Search Role"
                                className="w-full p-2 pl-10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div className='Status w-full max-w-md'>
                        <div className="flex flex-col items-center justify-center w-full p-2 rounded-lg border border-gray-500 relative">
                            <div className="absolute -top-3 left-2 bg-white px-2 text-sm text-black font-medium">Status</div>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-2 p-2'>
                                {['live', 'past'].map(option => (
                                    <div
                                        key={option}
                                        className="flex items-center justify-center space-x-2 cursor-pointer text-gray-400"
                                        onClick={() => toggleSelection(option, status, setStatus)}
                                    >
                                        <span>
                                            {option.charAt(0).toUpperCase() + option.slice(1)} Offers
                                        </span>
                                        <div className={`w-4 h-4 border border-gray-500 rounded flex items-center justify-center ${status.includes(option) ? 'border-black bg-black' : 'border-gray-500'}`}>
                                            {status.includes(option) && <FaCheck className="text-white text-xs" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='Type w-full max-w-md'>
                        <div className="flex flex-col items-center justify-center w-full p-2 rounded-lg border border-gray-500 relative">
                            <div className="absolute -top-3 left-2 bg-white px-2 text-sm text-black font-medium">Type</div>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-2 p-2'>
                                {['internship', 'PPO', 'intern + PPO'].map(option => (
                                    <div
                                        key={option}
                                        className="flex items-center justify-center space-x-2 cursor-pointer text-gray-400"
                                        onClick={() => toggleSelection(option, type, setType)}
                                    >
                                        <span>
                                            {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' + ')}
                                        </span>
                                        <div className={`w-4 h-4 border border-gray-500 rounded flex items-center justify-center ${type.includes(option) ? 'border-black bg-black' : 'border-gray-500'}`}>
                                            {type.includes(option) && <FaCheck className="text-white text-xs" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='Location w-full max-w-md'>
                        <div className="flex flex-col items-center justify-center w-full p-2 rounded-lg border border-gray-500 relative">
                            <div className="relative flex items-center w-full mt-2">
                                <FaSearch className="absolute left-3 text-gray-400 font-normal" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full p-2 pl-10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div className="absolute -top-3 left-2 bg-white px-2 text-sm text-black font-medium">Location</div>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-2 p-2'>
                                {['remote', 'onsite'].map(option => (
                                    <div
                                        key={option}
                                        className="flex items-center justify-center space-x-2 cursor-pointer text-gray-400"
                                        onClick={() => toggleSelection(option, location, setLocation)}
                                    >
                                        <span>
                                            {option.charAt(0).toUpperCase() + option.slice(1)}
                                        </span>
                                        <div className={`w-4 h-4 border border-gray-500 rounded flex items-center justify-center ${location.includes(option) ? 'border-black bg-black' : 'border-gray-500'}`}>
                                            {location.includes(option) && <FaCheck className="text-white text-xs" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='Batch w-full max-w-md'>
                        <div className="flex flex-col items-center justify-center w-full p-2 rounded-lg border border-gray-500 relative">
                            <div className="absolute -top-3 left-2 bg-white px-2 text-sm text-black font-medium">Batch</div>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-2 p-2'>
                                {['2021', '2022', '2023', '2024'].map(option => (
                                    <div
                                        key={option}
                                        className="flex items-center justify-center space-x-2 cursor-pointer text-gray-400"
                                        onClick={() => toggleSelection(option, batch, setBatch)}
                                    >
                                        <span>
                                            {option}
                                        </span>
                                        <div className={`w-4 h-4 border border-gray-500 rounded flex items-center justify-center ${batch.includes(option) ? 'border-black bg-black' : 'border-gray-500'}`}>
                                            {batch.includes(option) && <FaCheck className="text-white text-xs" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-500 rounded-lg p-10 text-center w-full max-w-md'>
                        Extra Filter Space
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;

import React from 'react';
import Card from '../components/Card';

const cards = [
    { image: 'src/assets/images/water-drop.png', text: 'Water Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/flash_on_100dp_5F6368_FILL0_wght400_GRAD0_opsz48.png', text: 'Electricity Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/road-with-broken-line.png', text: 'Road Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/health_and_safety_100dp_5F6368_FILL0_wght400_GRAD0_opsz48.png', text: 'Health Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/warning.png', text: 'Traffic Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/property.png', text: 'Residential Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/save-the-planet.png', text: 'Environmental Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/social-care.png', text: 'Social Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/administrative.png', text: 'Administrative Issue', buttonText: 'Click Me' },
    { image: 'src/assets/images/light-bulb.png', text: 'Educational Issue', buttonText: 'Click Me' },
];

const ReportIssue = () => {
    return (
        <>
            <div className='bg-[#669bbc]'>
                <h1 className='text-center font-bold text-2xl h-10 bg-[#003049] text-white'>
                    Report Your Issue Here....
                </h1>
                <div className="p-4 flex justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cards.map((card, index) => (
                            <Card key={index} image={card.image} text={card.text} buttonText={card.buttonText} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReportIssue;

import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReportIssue = () => {
    return (
        <>
         <div style={{ backgroundColor: '#669bbc', minHeight: '100vh' }}>
          <main className="container mt-8 my-1" style={{ backgroundColor: '#669bbc' }}>
                    <div className="max-w-9xl mx-8 p-4  shadow-md rounded-lg my-6 bg-[#003049]">
                        <h2 className="text-2xl font-bold mb-4  text-white items-center">Report an Issue</h2>
                        <form className="flex flex-col md:flex-row gap-6">
                            {/* Left Section */}
                            <div className="w-full md:w-1/2">
                                {/* Full Name */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Full Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Full Name"
                                    />
                                </div>

                                {/* Contact Information */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Email Address</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Email Address"
                                    />
                                </div>

                                {/* Type of Issue */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Type of Issue</label>
                                    <select
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Water Problem</option>
                                        <option>Electricity Problem</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Location */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Location</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Address or Location"
                                    />
                                </div>

                                {/* Date of Occurrence */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Date of Occurrence</label>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Time of Occurrence */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Time of Occurrence</label>
                                    <input
                                        type="time"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Vertical Line */}
                            <div className="border-l border-gray-300"></div>

                            {/* Right Section */}
                            <div className="w-full md:w-1/2">
                                {/* Description of the Problem */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-white">Description of the Problem</label>
                                    <textarea
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        rows="8"
                                        placeholder="Describe the issue in detail"
                                    ></textarea>
                                </div>

                                {/* Severity Level */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-white">Severity Level</label>
                                    <select
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                {/* Upload Photos or Documents */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-white">Upload Supporting Documents</label>
                                    <input
                                        type="file"
                                        className="mt-1 block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>

                                {/* Acknowledgment Checkbox */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-white">
                                        <input
                                            type="checkbox"
                                            className="mr-2 leading-tight"
                                        />
                                        I confirm that the information provided is accurate.
                                    </label>
                                </div>

                                {/* Privacy Consent */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-white">
                                        <input
                                            type="checkbox"
                                            className="mr-2 leading-tight"
                                        />
                                        I agree to the privacy policy.
                                    </label>
                                </div>

                                {/* Submit and Reset Buttons */}
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-[#669bbc] font-bold text-black py-2 px-4 rounded-md shadow-sm "
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        className=" bg-[#669bbc] font-bold text-black py-2 px-4 rounded-md shadow-sm"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
            </div>
            </main>
            </div>
        </>

    );
};

export default ReportIssue;

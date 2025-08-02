import { useState } from 'react';

const BookingPages = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        origin: 'Dhaka',
        destination: "Cox's Bazar",
        fromDate: '2023-09-01',
        toDate: '2023-09-12'
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl font-bold text-white">COX'S BAZAR</h1>
                <p className="text-white">
                    Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                </p>           
            </div>

            {/* Right Section - Booking Form */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Origin</label>
                        <select 
                            name="origin"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={formData.origin}
                            onChange={handleChange}
                        >
                            <option value="Dhaka">Dhaka</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Destination</label>
                        <select 
                            name="destination"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={formData.destination}
                            onChange={handleChange}
                        >
                            <option value="Cox's Bazar">Cox's Bazar</option>
                        </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">From</label>
                            <input 
                                type="date" 
                                name="fromDate"
                                className="w-full p-2 border border-gray-300 rounded" 
                                value={formData.fromDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">To</label>
                            <input 
                                type="date" 
                                name="toDate"
                                className="w-full p-2 border border-gray-300 rounded" 
                                value={formData.toDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        Start Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPages;
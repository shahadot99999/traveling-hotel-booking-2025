import hotelsData from '../data/hotels.json';

const HotelBookingFetch = () => {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <h2 className="text-2xl font-semibold mb-8">252 stays Apr 13-17 · 3 guests · Stay in Cox's Bazar</h2>
            
            <div className="grid grid-cols-1 gap-6">
                {hotelsData.map(hotel => (
                    <div key={hotel.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex">
                        {/* Hotel Image - Left Side */}
                        <div className="w-1/3 h-64 overflow-hidden">
                            <img 
                                src={hotel.image} 
                                alt={hotel.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Hotel Details - Right Side */}
                        <div className="w-2/3 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{hotel.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{hotel.location}</p>
                                
                                <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-3">
                                    <span>{hotel.guests} guests</span>
                                    <span>•</span>
                                    <span>{hotel.bedrooms} bedrooms</span>
                                    <span>•</span>
                                    <span>{hotel.beds} beds</span>
                                    <span>•</span>
                                    <span>{hotel.baths} baths</span>
                                </div>
                                
                                <div className="text-sm text-gray-500 mb-3">
                                    {hotel.amenities.join(" • ")}
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-green-600 text-sm font-medium mb-3">{hotel.cancellation}</p>
                                
                                <div className="flex items-center">
                                    <span className="line-through text-gray-400 mr-2">${hotel.originalPrice}</span>
                                    <span className="font-bold text-lg">${hotel.price}</span>
                                    <span className="ml-2 text-red-500 font-medium">{hotel.discount}% off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelBookingFetch;
import HotelBokkingfetch from '../components/HotelBokkingfetch';
import img from "../assets/mapimage.png";
import BookingNavbar from '../components/BookingNavbar';


const HotelBookingLayout = () => {
    return (
         <div className="flex flex-col min-h-screen">
            <BookingNavbar></BookingNavbar>
            
            <div className="flex flex-1 mt-2">
                {/* Left side - Hotel listings (2/3 width) */}
                <div className="w-full md:w-2/3 p-4 overflow-y-auto">
                    <HotelBokkingfetch />
                </div>
                
                {/* Right side - Map (1/3 width, hidden on mobile) */}
                <div className="hidden md:block md:w-1/3 sticky top-0 h-screen">
                    <img 
                        src={img} 
                        alt="Map" 
                        className="w-96 h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HotelBookingLayout;
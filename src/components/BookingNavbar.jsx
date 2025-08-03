import { Link } from 'react-router-dom';
import img from '../assets/logo.png';

const BookingNavbar = () => {
    return (
         <div className="flex justify-between items-center p-4  shadow-sm">
            {/* Logo */}
            
                <div className="flex items-center ">
                <img 
                    src={img} 
                    alt="Travel Guru Logo" 
                    
                    className="h-10 bg-white" // Adjust height as needed
                />
            </div>
            
            
            
            {/* Navigation Links */}
            <div className="flex space-x-6 text-black">
                 <Link to="/">Home</Link>
                 <Link to="/destination">Destination</Link>
                 <Link to="/contact">Contact</Link>
                 <Link to="/blog">Blog</Link>
               
            </div>
            
            {/* Login Button */}
            <div className="ml-6">
                <button className=" bg-[#F9A51A] text-white py-2 px-6 rounded-none">
                    Login
                </button>
            </div>
        </div>
    );
};

export default BookingNavbar;
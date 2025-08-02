// import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import img from '../assets/logo.png';


const Navbar = () => {
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
            
            {/* Search Bar */}
            <div className="flex-1 mx-8">
                <input 
                    type="text" 
                    placeholder="Search your Destination..." 
                    className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-6 text-white">
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

export default Navbar;
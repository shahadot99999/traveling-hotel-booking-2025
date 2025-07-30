// import logo from "../assets/logo.png";
import img from '../assets/logo.png';


const Navbar = () => {
    return (
         <div className="flex justify-between items-center p-4 bg-white shadow-sm">
            {/* Logo */}
            
                <div className="flex items-center">
                <img 
                    src={img} 
                    alt="Travel Guru Logo" 
                    className="h-10" // Adjust height as needed
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
            <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">News</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Destination</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            
            {/* Login Button */}
            <div className="ml-6">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
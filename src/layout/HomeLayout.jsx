import Navbar from "../components/Navbar";
import Mainsections from "../components/Mainsections";
import TravelFooter from "../components/TravelFooter";
import img from "../assets/Rectangle 1.png";

const HomeLayout = () => {
    return (
      <div className="font-poppins">
        {/* Overlay container - this will contain both Nav and Main with overlay */}
        <div className="relative">
          {/* Overlay image/effect - adjust as needed */}
          <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none"></div>
          
          {/* Or if you want an actual image overlay */}

          <div className="absolute inset-0 z-10 pointer-events-none">
            <img src={img} alt="" className="w-full h-full object-cover opacity-30" />
          </div>
          
          <nav className="w-11/12  mx-auto bg-none py-2 relative z-20">
            <Navbar></Navbar>
          </nav>

          <main className="w-11/12 mx-auto pt-20 relative z-20">
            <Mainsections></Mainsections>
          </main>
        </div>

        {/* Footer stays outside the overlay container */}
        <footer className=" pt-4">
          <TravelFooter></TravelFooter>
        </footer>
      </div>
    );
};

export default HomeLayout;
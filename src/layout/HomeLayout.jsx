import Navbar from "../components/Navbar";

import Mainsections from "../components/Mainsections";
import TravelFooter from "../components/TravelFooter";


const HomeLayout = () => {
    return (
      <div className="font-poppins">
        <nav className="w-11/12 mx-auto py-2">
          <Navbar></Navbar>
        </nav>

        <main className="w-11/12 mx-auto pt-20">
          <Mainsections></Mainsections>
        </main>



        <footer>
          <TravelFooter></TravelFooter>
        </footer>
      </div>
    );
};

export default HomeLayout;
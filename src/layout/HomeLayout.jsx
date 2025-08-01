import Navbar from "../components/Navbar";

import Mainsections from "../components/Mainsections";


const HomeLayout = () => {
    return (
      <div className="font-poppins">
        <nav className="w-11/12 mx-auto py-2">
          <Navbar></Navbar>
        </nav>

        <main className="w-11/12 mx-auto pt-8">
          <Mainsections></Mainsections>
        </main>



        <footer></footer>
      </div>
    );
};

export default HomeLayout;
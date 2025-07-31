import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
          <nav className="w-11/12 mx-auto py-2">
           <Navbar></Navbar>
          </nav>
          
          <main className="w-11/12 mx-auto pt-4">
             <div>
              <div className="left col-4">left</div>
              <div className="right col-8">Right</div>
             </div>
          </main>
          <footer></footer>
        </div>
    );
};

export default HomeLayout;
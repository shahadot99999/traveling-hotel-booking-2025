import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
          <nav></nav>
          <section className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
          </section>
          <main></main>
          <footer></footer>
        </div>
    );
};

export default HomeLayout;
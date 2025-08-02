import img1 from "../assets/Sajek.png";
import img2 from "../assets/Sreemongol.png";
import img3 from "../assets/sundorbon.png";

const Mainsections = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl font-bold text-white">COX'S BAZAR</h1>
                <p className="text-white">
                    Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
                    It is famous mostly for its long natural sandy beach...
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded transition">
                    Booking →
                </button>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 relative">
                    <img src={img1} alt="Cox's Bazar" className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 flex items-end justify-center p-2 bg-black bg-opacity-30 text-white font-semibold">
                        COX'S BAZAR
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400  relative">
                    <img src={img2} alt="Sreemangal" className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 flex items-end justify-center p-2 bg-black bg-opacity-30 text-white font-semibold">
                        SREEMANGAL
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400  relative">
                    <img src={img3} alt="Sundarbans" className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 flex items-end justify-center p-2 bg-black bg-opacity-30 text-white font-semibold">
                        SUNDARBANS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainsections;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    // const handlesubmit = (e) => {
    //     e.preventDefault();

    //     //get form data
    //     const form = new FormData(e.target);
    //     const firstname = form.get("firstname");
    //     const lasttname = form.get("lastname");
    //     const email = form.get("email");
    //     const password = form.get("password");
    //     const password1 = form.get("password");

       

    //     console.log({ firstname, lasttname, email, password, password1 });

    //     createNewUser(email, password, password1)
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user);
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         });
    // }

    const handlesubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const firstname = form.get("firstname");
    const lastname = form.get("lastname");
    const email = form.get("email");
    const password = form.get("password");
    
    // Combine first and last name
    const displayName = `${firstname} ${lastname}`;

    createNewUser(email, password)
        .then((result) => {
            const user = result.user;
            
            // Update user profile with display name
            return updateProfile(user, {
                displayName: displayName
            }).then(() => {
                setUser({...user, displayName: displayName});
                console.log(user);
            });
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
}


    return (
        <div className="min-h-screen flex 
                justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10 border border-gray-300">

                <h2 className="text-2xl font-semibold ml-6">Create an account</h2>
                <form onSubmit={handlesubmit} className="card-body">

                    {/* First Name */}
                    <div className="form-control">

                        <input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered" required />
                    </div>

                    {/* Last Name */}
                    <div className="form-control">

                        <input
                            name="lastname"
                            type="last Name"
                            placeholder="Last Name"
                            className="input input-bordered" required />
                    </div>

                    {/* Email */}
                    <div className="form-control">

                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered" required />
                    </div>

                    {/* Password */}
                    <div className="form-control">

                        <input
                            name="password"
                            type="password"
                            placeholder="password" className="input input-bordered" required />

                    </div>

                    {/*conform Password*/}
                    <div className="form-control">

                        <input
                            name="password"
                            type="password" placeholder=" conform password" className="input input-bordered" required />

                    </div>


                    <div className="form-control mt-6">
                        <button className=" w-64 bg-[#F9A51A] text-white py-2 px-6 rounded-none">Register</button>
                    </div>
                </form>

                <p className="text-center font-semibold">
                    Already have an account? <Link className="text-[#F9A51A]" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
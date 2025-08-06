import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Loading from "./Loading";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const [error, setError]= useState('');
   
    const handlesubmit = (e) => {
    e.preventDefault();
    setError('');

    const form = new FormData(e.target);
    const firstname = form.get("firstname");
    const lastname = form.get("lastname");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword"); // Changed from second password field
    
    // Combine first and last name
    const displayName = `${firstname} ${lastname}`;

    // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return; // Stop the function if passwords don't match
        }

        

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
                            name="confirmPassword"
                            type="password" placeholder=" conform password" className="input input-bordered" required />

                    </div>

                    {/* Error message display above button */}
                    {error && (
                        <p className="text-sm text-red-600 mt-1 mb-1 text-center">
                            {error}
                        </p>
                    )}




                    <div className="form-control mt-0">
                        <button className="w-64 bg-[#F9A51A] text-white py-2 px-6 rounded-none">
                            Register
                        </button>
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
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithPopup, getAuth, updateProfile } from "firebase/auth";
import {  FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config"

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

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
                // console.log(user);
            });
        })
        .catch((error) => {
           // console.log(error.code, error.message);
        });
}

const handleGoogleSignIn =()=>{
   signInWithPopup(auth, provider)
   .then((result)=>{
    // console.log(result);
   })
   .catch(error =>{
    // console.log(error);
   })
}


    return (
        <div className="min-h-screen flex flex-col 
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

            <div className="my-6  px-6 py-2 flex items-center w-full max-w-sm justify-center">
                <div className="flex-1 h-px bg-gray-300"></div>
                <div className="px-4 text-gray-500">OR</div>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            
            <div className="w-full max-w-sm space-y-4">
                <button onClick={handleGoogleSignIn} className="btn w-full border  border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    <FaGoogle className="mr-2" /> Continue with Google
                </button>
               
            </div>
           
        </div>
    );
};

export default Register;
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex 
        justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10 ">

                <h2 className="text-2xl font-semibold ml-6">Login</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email/username" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className=" w-64 bg-[#F9A51A] text-white py-2 px-6 rounded-none">Login</button>
                    </div>
                </form>

                <p className="text-center font-semibold">
                    Don’t have an account? <Link className="text-[#F9A51A]" to="/auth/register">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
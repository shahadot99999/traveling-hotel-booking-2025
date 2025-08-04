
import BookingNavbar from '../components/BookingNavbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className=' font-Montserrat bg-[#FFFFFF]'>
            <header className='py-3 w-11/12 mx-auto'>
                <BookingNavbar></BookingNavbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
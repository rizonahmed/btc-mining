import { NavLink } from 'react-router-dom';
import bitcoin from '../assets/bitcoin-01.png';
import shoping from '../assets/shopping-bag-02.png';
import wallet from '../assets/bitcoin-wallet.png';
import user from '../assets/user-circle.png';

const Footer = () => {
    return (
        <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center">
            <div className='bg-[#22273A] flex justify-evenly border border-gray-600 rounded-full p-4 w-[85%] max-w-md'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `p-2 rounded-full ${isActive ? 'bg-[#2C89FF]' : ''}`
                    }
                >
                    <img src={bitcoin} alt="Bitcoin" />
                </NavLink>

                <NavLink
                    to="/mining"
                    className={({ isActive }) =>
                        `p-2 rounded-full ${isActive ? 'bg-[#2C89FF]' : ''}`
                    }
                >
                    <img src={shoping} alt="Shopping" />
                </NavLink>

                <NavLink
                    to="/wallet"
                    className={({ isActive }) =>
                        `p-2 rounded-full ${isActive ? 'bg-[#2C89FF]' : ''}`
                    }
                >
                    <img src={wallet} alt="Wallet" />
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `p-2 rounded-full ${isActive ? 'bg-[#2C89FF]' : ''}`
                    }
                >
                    <img src={user} alt="User" />
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;

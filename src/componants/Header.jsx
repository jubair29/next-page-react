import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav className=' my-container flex justify-between bg-gray-100 px-4 py-5'>
            {/* Logo section */}

            <Link to='/' className='flex items-center'>
                <BoltIcon className='w-6 h-6 text-blue-700'/>
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>NextPage</span>
            </Link>

            {/* nav Items  */}

            <ul className='items-center hidden lg:flex space-x-8 font-semibold text-gray-800'>
                <li>
                    <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-800' : '')}>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to='/book' className={({isActive}) => (isActive ? 'text-blue-800' : '')}>
                        Books</NavLink>

                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => (isActive ? 'text-blue-800' : '')}>
                        About Us</NavLink>

                </li>

            </ul>
        </nav>
    );
};

export default Header;
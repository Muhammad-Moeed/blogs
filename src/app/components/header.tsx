"use client"; // Mark this file as a Client Component

import { useState } from "react"; // Import useState for managing the mobile menu state
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to control menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <Link href="/">
                    <Image src="/logo.png" width={400} height={400} alt="logo" className='w-20' />
                </Link>

                <div className={`max-lg:${isMenuOpen ? 'block' : 'hidden'} lg:!block`}>
                    <button onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            
                        </svg>
                    </button>

                    <ul className={`lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <li className='mb-6 hidden max-lg:block'>
                            <Link href="/">
                                <Image src="/logo.png" width={400} height={400} alt="logo" className='w-36' />
                            </Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link href='/' className='focus:text-blue-600 hover:text-[#007bff] block font-semibold text-[15px]'>Home</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link href='/aboutus' className='focus:text-blue-600 hover:text-[#007bff] block font-semibold text-[15px]'>About us</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link href='/blogs' className='focus:text-blue-600 hover:text-[#007bff] block font-semibold text-[15px]'>Blogs</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>
                    <button className='px-2 py-2 text-xs rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Login</button>
                    <button className='px-2 py-2 text-xs rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign up</button>

                    <button onClick={toggleMenu} className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

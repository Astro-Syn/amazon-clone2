import React, {useState} from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Login from './Login';
import Register from './Register';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);


  return (
    <header>
      <div className="flex items-center bg-[#131A22] p-2 py-2">
        <div className="mt-2 flex items-center grow sm:grow-0">
          <img
            src="/Images/amazon_logo_white.png"
            alt="amazon logo"
            width={110}
            height={30}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500 m-1 rounded-md grow cursor-pointer">
          <input
            type="text"
            className="bg-white p-2 h-full grow shrink rounded-l-md focus:outline-none px-4"
          />
          <CiSearch className="h-8 w-8 p-2 text-black" />
        </div>

        {/* Right Side */}

        {/*Login Section */}
        <div className="text-white flex space-x-6 mx-5 items-center text-xs"
        onClick={() => setShowLogin(true)}
        >
          <div className="link cursor-pointer">
            <p>Hello, Guest</p>
            <p className="font-extrabold md:text-sm">Sign In</p>
          </div>


          <div className="link cursor-pointer">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center cursor-pointer">
            <span className="absolute top-0 right-0 bg-yellow-400 text-black rounded-full md:right-10 h-4 w-4 text-center font-bold">
              3
            </span>
            <MdOutlineShoppingCart className="h-10 w-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Lower Nav */}
      <div className="flex items-center bg-[#37475A] space-x-3 p-2 pl-6 text-white text-sm">
        <p className="link flex items-center">
          <IoMenu className="h-6 mr-1 text-lg" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>


     {/*Notes for myself: If this is true, do this */}
       {showLogin && (
            <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 rounded-lg shadow-lg relative'>
                   
                    <Login/>
                    <div>
                        <p>Dont have an account?<a className='text-blue-800 cursor-ponter' onClick={() => setShowRegister(true)}> Register here</a></p>
                    </div>

                </div>
            </div>
        )}

        {showRegister && (
            <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 rounded-lg shadow-lg relative'>
                   
                    <Register onClose={() => setShowRegister(false)}/>
                    <div>
                        
                    </div>

                </div>
            </div>
        )}
    </header>
  );
}

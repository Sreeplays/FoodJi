import React from 'react';
import { UserAuth } from '../FireBase-Data-Config/AuthContext';
import ReactTyped from 'react-typed';



const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-5xl font-bold pt-12  from-purple-900 via-[#b89a55] to-purple-900 bg-gradient-to-r bg-clip-text text-transparent'>Account</h1>
      <hr className='mb-14 mt-5 border-black'/>
      <div>
      <h1 className='text-[#00df9a] sm:text-3xl text-2xl md:py-6 font-sans font-extrabold hover:tracking-widest duration-700 pb-4 pt-16 mt-0 relative'><ReactTyped strings={['Hey, Welcome !']} typeSpeed={60}/></h1>
        <p> {user?.displayName} </p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;
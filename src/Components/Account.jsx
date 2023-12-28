import React from 'react';
import { UserAuth } from '../FireBase-Data-Config/AuthContext';
import ReactTyped from 'react-typed';
import { Helmet } from 'react-helmet';



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
    <div className='w-[300px] h-full m-auto mb-16'>
      <Helmet>
        <title>Foodjii | Account</title>
      </Helmet>
      <h1 className='text-center text-5xl font-bold pt-12  from-purple-900 via-[#b89a55] to-purple-900 bg-gradient-to-r bg-clip-text text-transparent'>Account</h1>
      <hr className='mb-14 mt-5 border-black'/>
      <div>
      <h1 className='text-[#00df9a] sm:text-3xl text-2xl md:py-6 font-sans font-extrabold hover:tracking-widest duration-700 pb-4 pt-16 mt-0 relative'><ReactTyped strings={['Hey, Welcome !']} typeSpeed={60}/></h1>
        <img src={user?.photoURL} alt="Profile pic" className='border rounded-full border-black' />
        <p className='text-xl'> {user?.displayName} </p>
        <p className='font-semibold text-base mt-3'>Email</p>
        <p className='border my-2 bg-gray-700 italic text-white font-extralight font-serif rounded-lg px-2'>~ {user?.email} </p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
      <a className='border py-2 px-5 ml-3 mt-10' href='/'>Go to Home</a>
    </div>
  );
};

export default Account;
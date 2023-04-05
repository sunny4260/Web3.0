import React from 'react'
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    
    <div className='w-full  flex md:justify-center justify-between items-center flex-col p-2 gradient-bg-footer -mb-10'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-32' />
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Tutorials</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Wallets</p>
        </div>
      </div>
      <dir className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white text-sm text-center'>Come join us and hear for the unexpected miracle</p>
        <p className='text-white text-sm text-center'>Info@Kryptomastery.com</p>
      </dir>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
      <div className='sm:w-[90%] w-full flex justify-between items-center'>
      <p className='text-white text-sm text-center'>@Kryptomastery 2023</p>
        <p className='text-white text-sm text-center'>&copy; All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
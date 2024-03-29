import React from 'react';
import error from '../assets/error.png';
import { Link } from 'react-router-dom';
import DarkSmily from '../assets/DarkSmily.svg';

const ErrorMSG = () => 
{
  return (
    <article className=
    'flex flex-col justify-center items-center relative h-[480px] sm:w-[auto] md:w-[35vw] border-white border-2 rounded-[2rem] backdrop-blur-xl *:text-white gap-6 mx-5 z-0'
    > 
    <img className='absolute top-[-40px] left-[-80px] z-10 h-40 w-auto object-cover' src={DarkSmily} />
        <img className="h-30 w-auto mt-5" src={error}/>
        <p className="text-2xl border-b-2 pb-4 mx-4">You came across a <span className='text-red-500'>dead</span> URL</p>
        <p className="text-xl mb-3 mx-4">Try contacting the owners of this site.</p>
        <button className='py-3 px-16 bg-black border-2 border-white rounded-[50px] backdrop-blur-xl'>
            Proceed to Login
            </button>
    </article>
  )
}

export default ErrorMSG
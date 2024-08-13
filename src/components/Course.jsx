
import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20'>
      <div className='mt-48 items-center justify-center text-center'>
        <h1 className='text-xl md:text-4xl'>
          We're delighted to have you 
          <span className='text-pink-600'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, harum impedit eos rem laboriosam corporis ducimus, eius
            velit unde possimus delectus ipsa alias tempore doloribus culpa 
            labore placeat, architecto expedita.Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. Ex, harum impedit eos rem laboriosam
            corporis ducimus, eius labore placeat, architecto expedita.
            Ex, harum impedit eos rem laboriosam corporis ducimus, eius.
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
            Back
          </button>
          </Link>

      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
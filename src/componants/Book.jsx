import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image,title,subtitle,price,isbn13} = book;
    return (
    
        // <div className='overflow-hidden relative transition 
        //       duration-200 transform hover:-translate-y-2 rounded-xl shadow-xl'>
        //         <img src={image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80 ' />
        //         <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100
        //             text-gray-300 absolute inset-0  flex flex-col '>
        //             <p className=' ml-4 mt-8 font-bold text-xl'>{title}</p>
        //             <p className=' ml-4 mt-8  text-sm'>{subtitle.substring(0,45)}....</p>
        //             <p className=' ml-4 mt-auto pb-8'>Price : {price}</p>
        //         </div>
        // </div>
        <Link to={`../book/${isbn13}`}>
            <div className='overflow-hidden relative transition 
              duration-200 transform hover:-translate-y-2 rounded-xl shadow-xl'>
                <img src={image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80 ' />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100
                    text-gray-300 absolute inset-0  flex flex-col '>
                    <p className=' ml-4 mt-8 font-bold text-xl'>{title}</p>
                    <p className=' ml-4 mt-8  text-sm'>{subtitle.substring(0,45)}....</p>
                    <p className=' ml-4 mt-auto pb-8'>Price : {price}</p>
                </div>
        </div>
        </Link>
      
    );
};

export default Book;
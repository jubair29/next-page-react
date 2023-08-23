import React from 'react';

const Book = ({book}) => {
    const {image,title,subtitle,price} = book;
    return (
        <div className=' overflow-hidden relative rounded-xl shadow-xl '>
            {/* <h1> {title}</h1> */}
            <img src={image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80 ' />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0'>
                <p className=' ml-4 mt-8 font-bold text-xl'>{title}</p>
                <p className=' ml-4 mt-8  text-sm'>{subtitle}</p>
                <p className=' ml-4 mt-12'>Price : {price}</p>
            </div>
        </div>
    );
};

export default Book;
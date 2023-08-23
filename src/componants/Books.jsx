import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className='my-container'>
            <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 '>
                {
                books.books.map(book => <Book
                book={book}
                ></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;
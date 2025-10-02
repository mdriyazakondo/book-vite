import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const SingleBook = () => {
  const books = useLoaderData();
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    tags,
    yearOfPublishing,
  } = books;

  const { handleListedBook, handleReadBook } = useContext(BookContext);

  return (
    <div className="max-w-7xl md:mx-auto my-20 flex flex-col md:flex-row mx-4  items-center justify-center gap-10">
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center rounded-md">
        <img className="p-20 w-[500px]" src={image} alt="" />
      </div>
      <div className="w-full  md:w-1/2 space-y-4">
        <h3 className="text-4xl font-semibold text-gray-700">{bookName}</h3>
        <h4 className="font-semibold text-xl text-gray-600">By {author}</h4>
        <p className="border-y-2 border-gray-400 text-gray-600 py-3">
          {category}
        </p>
        <p className="text-xl">
          <span className="font-bold">Review : </span>
          <small className="text-xl text-gray-600"> {review}</small>
        </p>
        <div className="flex items-center gap-7 pb-3 border-b-2 border-gray-400">
          <h4 className="font-semibold text-xl">Tag</h4>
          {tags.map((tag, index) => (
            <span
              className="text-green-600  bg-green-100 rounded-full py-1.5 px-6"
              key={index}
            >
              # {tag}
            </span>
          ))}
        </div>
        <div className="w-2/5 space-y-3">
          <p className="flex items-center justify-between text-sm text-gray-500 font-medium">
            <span>Number of Pages:</span>
            <span>{totalPages}</span>
          </p>
          <p className="flex items-center justify-between text-sm text-gray-500 font-medium">
            <span>Publisher:</span>
            <span>{publisher}</span>
          </p>
          <p className="flex items-center justify-between text-sm text-gray-500 font-medium">
            <span>Year of Publishing:</span>
            <span>{yearOfPublishing}</span>
          </p>

          <p className="flex items-center justify-between text-sm text-gray-500 font-medium">
            <span>Rating:</span>
            <span>{rating}</span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleReadBook(bookId)}
            className="py-2 px-8 rounded-sm bg-transparent cursor-pointer border  border-gray-300 transition-all duration-500 hover:bg-[#50b1c9] text-[#50b1c9] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={() => handleListedBook(bookId)}
            className="py-2 px-8 rounded-sm hover:bg-transparent cursor-pointer border  border-gray-300 transition-all duration-500 hover:text-[#50b1c9] text-white bg-[#50b1c9]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;

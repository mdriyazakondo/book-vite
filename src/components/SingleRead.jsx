import { LocationEdit, NotepadTextDashed, UsersRound } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const SingleRead = ({ books, type }) => {
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
  const { removeReadBook, removeListedBook } = useContext(BookContext);

  const handleDelete = () => {
    if (type === "read") removeReadBook(books.bookId);
    if (type === "wishlist") removeListedBook(books.bookId);
  };
  return (
    <div className="flex items-center gap-10 border border-gray-400 rounded-md p-8">
      <div className="flex items-center justify-center bg-gray-100">
        <img className="p-12 w-[200px]" src={image} alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl md:text-4xl font-semibold">{bookName}</h2>
        <h4 className="text-xl font-semibold text-gray-500">By {author}</h4>
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold">Tag</p>
          {tags.map((tag, index) => (
            <span
              className="text-green-600 bg-green-100 rounded-full px-6 py-1"
              key={index}
            >
              # {tag}
            </span>
          ))}
          <h4 className="flex items-center gap-2">
            <LocationEdit />
            <span>Year of Publishing: </span>
            {yearOfPublishing}
          </h4>
        </div>
        <div className="flex items-center gap-8 pb-4 border-b-2 border-gray-400">
          <h4 className="flex items-center gap-2">
            <UsersRound />
            <span>{publisher}</span>
          </h4>
          <h4 className="flex items-center gap-2">
            <NotepadTextDashed />
            <span>{totalPages}</span>
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="py-1 px-6 rounded-full bg-blue-100 text-blue-600">
            Category : {category}
          </h4>
          <h4 className="py-1 px-6 rounded-full bg-orange-100 text-orange-400">
            Rating {rating}
          </h4>
          <Link
            to={`/books/${bookId}`}
            className="px-6 py-1 rounded-full bg-green-600 text-white cursor-pointer"
          >
            View Detalis
          </Link>
          <button
            onClick={handleDelete}
            className="py-1 px-6 rounded-full bg-red-600 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRead;

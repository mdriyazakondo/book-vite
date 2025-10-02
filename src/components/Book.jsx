import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ books }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = books;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="shadow py-4 px-8 space-y-4 rounded-md border border-gray-200">
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-md">
          <img className="h-[200px] w-[150px]" src={image} alt="" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {tags.map((tag, index) => (
              <span
                className="bg-green-100 text-green-600 p-1 px-4 rounded-full"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">{bookName}</h2>
          <h4 className="text-gray-500 font-medium">By {author}</h4>

          <div className="flex items-center justify-between border-t border-dashed border-gray-400 pt-3">
            <p className="text-gray-700 font-medium">{category}</p>
            <p className="flex items-center">
              {rating} <Star className="w-6 h-6 pl-2 text-gray-600" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

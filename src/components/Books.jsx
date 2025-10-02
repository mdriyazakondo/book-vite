import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const Books = () => {
  const { booksData } = useContext(BookContext);

  return (
    <div className="max-w-7xl  mx-4 md:mx-auto mb-20">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8">
        Books List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <Book key={book.bookId} books={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import SingleRead from "../components/SingleRead";

const ReadBook = () => {
  const { bookRead } = useContext(BookContext);
  return (
    <div className="max-w-4xl mx-auto space-y-10 my-20">
      {bookRead.map((books) => (
        <>
          <SingleRead key={books.bookId} books={books} type="read" />
        </>
      ))}
    </div>
  );
};

export default ReadBook;

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import SingleRead from "../components/SingleRead";

const ListedBook = () => {
  const { bookListed } = useContext(BookContext);

  if (bookListed.lenght === 0) {
    return (
      <div className="text-center text-xl my-20">
        You haven't added any books to Read List.
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto space-y-10 my-20">
      {bookListed.map((books) => (
        <>
          <SingleRead key={books.bookId} books={books} type="wishlist" />
        </>
      ))}
    </div>
  );
};

export default ListedBook;

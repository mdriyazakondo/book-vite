import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);

  const [bookRead, setBookRead] = useState(() => {
    const saved = localStorage.getItem("bookRead");
    return saved ? JSON.parse(saved) : [];
  });

  const [bookListed, setBookListed] = useState(() => {
    const saved = localStorage.getItem("bookListed");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch("/data/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookRead", JSON.stringify(bookRead));
  }, [bookRead]);

  useEffect(() => {
    localStorage.setItem("bookListed", JSON.stringify(bookListed));
  }, [bookListed]);

  const handleReadBook = (id) => {
    const book = booksData.find((b) => b.bookId === id);
    if (!book) return;

    if (bookRead.some((b) => b.bookId === id)) {
      toast.error("This book is already in your Read List!");
      return;
    }

    setBookRead((prev) => [...prev, book]);
    toast.success("Book added to Read List!");
  };

  const handleListedBook = (id) => {
    const book = booksData.find((b) => b.bookId === id);
    if (!book) return;

    if (bookListed.some((b) => b.bookId === id)) {
      toast.error("This book is already in your Wishlist!");
      return;
    }

    setBookListed((prev) => [...prev, book]);
    toast.success("Book added to Wishlist!");
  };

  const removeReadBook = (id) => {
    setBookRead((prev) => prev.filter((b) => b.bookId !== id));
  };

  const removeListedBook = (id) => {
    setBookListed((prev) => prev.filter((b) => b.bookId !== id));
  };

  const items = {
    booksData,
    bookRead,
    bookListed,
    handleReadBook,
    handleListedBook,
    removeReadBook,
    removeListedBook,
  };

  return <BookContext.Provider value={items}>{children}</BookContext.Provider>;
};

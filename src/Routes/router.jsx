import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import { lazy } from "react";
import SingleBook from "../components/SingleBook";
const Home = lazy(() => import("../pages/Home"));
const ListedBook = lazy(() => import("../pages/ListedBook"));
const ReadBook = lazy(() => import("../pages/ReadBook"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", Component: Home },
      { path: "/listedBook", Component: ListedBook },
      { path: "/readBook", Component: ReadBook },
      {
        path: "/books/:id",
        loader: async ({ params }) => {
          const res = await fetch("/data/booksData.json");
          const data = await res.json();
          const book = data.find((book) => book.bookId === parseInt(params.id));
          return book;
        },
        element: <SingleBook />,
      },
    ],
  },
]);

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router.jsx";
import { BookProvider } from "./context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <Suspense
        fallbackElement={
          <div className="p-8 text-center text-lg">Loading...</div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </BookProvider>
  </StrictMode>
);

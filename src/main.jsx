import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Root, { loader as rootLoader } from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Movies from "./routes/Movies.jsx";
import Users from "./routes/Users.jsx";

import {
  MoviesProvider,
  UsersProvider,
  UiProvider,
  SortProvider,
  FilterProvider,
} from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "movies",
        element: <Movies />,
      
      },
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SortProvider>
      <FilterProvider>
        <UiProvider>
          <UsersProvider>
            <MoviesProvider>
              <RouterProvider router={router} />
              <App />
            </MoviesProvider>
          </UsersProvider>
        </UiProvider>
      </FilterProvider>
    </SortProvider>
  </React.StrictMode>
);

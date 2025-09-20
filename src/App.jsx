import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import Header from "./components/common/Header";
import Foorer from "./components/common/Foorer";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Foorer />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/restaurant/:id",
          element: <SingleHotel />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
      ],
    },
  ]);
  return (
    <>
      {/* <h1>Welcome to Swiggy Clone</h1> */}
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

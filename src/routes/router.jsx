import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../pages/home";
import AllItems from "../pages/allItems";
import AddCraft from "../pages/addCraft";
import MyList from "../pages/myList";
import Login from "../pages/login";
import Register from "../pages/register";
import SubCategory from "../pages/subCategory";
import CraftDetails from "../pages/craftDetails";
import ArtDetails from "../pages/artDetails";
import PrivateRoute from "./privateRoute";
import UpdateCraft from "../pages/updateCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-items",
        element: <AllItems />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/arts`),
      },
      {
        path: "add-craft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/artsById/${params.id}`),
      },
      {
        path: "my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/artsByEmail/${params.email}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "craftDetails/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/painting/${params.id}`),
      },
      {
        path: "subCategory/:category",
        element: <SubCategory />,
        loader: ({ params }) => fetch(`https://art-gallery-server-beige.vercel.app/artsCategory/${params.category}`),
      },
      {
        path: "artsDetails/:name",
        element: (
          <PrivateRoute>
            <ArtDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/arts/${params.name}`),
      },
    ],
  },
]);

export default router;

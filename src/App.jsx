import { Routes, Route } from "react-router";
import Layout from "./layout/layout";
import AddCraft from "./pages/addCraft";
import AllItems from "./pages/allItems";
import MyList from "./pages/myList";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import SubCategory from "./pages/subCategory";
import CraftDetails from "./pages/craftDetails";



export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="all-items" element={<AllItems />} />
      <Route path="add-craft" element={<AddCraft />} />
      <Route path="my-list" element={<MyList />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/craftDetails/:id" element={<CraftDetails />} loader={({params})=>fetch(`${import.meta.env.VITE_API_URL}/painting/${params.id}`)} />
      <Route path="/subCategory/:category" loader={({params})=>fetch(`https://artisan-alley-server-rose.vercel.app/arts/${params.category}`)} element={<SubCategory />}  />
     </Route>
    </Routes>
  )
}



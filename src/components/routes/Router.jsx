import { BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/projects" element={<Projects></Projects>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import AboutUs from "./components/AboutUs.js"
import Courses from "./components/Courses.js"
import NavBar from "./components/NavBar.js"
import Layout from "./Layout.js";
import Home from "./Home.js";
import NotFound from "./NotFound.js";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
          {/*默认二级首页，添加index属性，去掉path来确保默认展示该页面*/}
            <Route index element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
          </Route>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;

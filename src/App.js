import './App.css';
import ImageSplitter from './components/ImageSplitter';
import ReactDOM from "react-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import NoPage from "./pages/NoPage"; 
import Layout from "./pages/Layout"; 
import TechHome from './pages/tech/TechHome';
import TripHome from './pages/trip/TripHome';
import { React, useState } from "react";

export default function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }

  return (
    <BrowserRouter>       
        <Routes>         
            <Route path="/" element={<Layout />}>           
            <Route index element={<Home />} />           
            <Route path="/techHome" element={<TechHome />} />    
            <Route path="/techHome/:id" element={<TechHome content={getBlogContent}/>} />    
            <Route path="/tripHome" element={<TripHome />} />  
            <Route path="/tripHome/:id" element={<TripHome content={getBlogContent}/>} />
            <Route path="*" element={<NoPage />} />         
        </Route>       
        </Routes>     
    </BrowserRouter>
  );
}


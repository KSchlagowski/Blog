import React from 'react';
import ImageSplitter from '../components/ImageSplitter';
import journeyImg from "../images/journey.jpg"
import computerImg from "../images/computer.jpg"

 function Home() {     
    const images = {
        topImage: computerImg,
        bottomImage: journeyImg
    };
    const links = {
        topLink: "/TechBlog",
        bottomLink: "/TripBlog"
    }

    return (
        <ImageSplitter images={images} links={links}/> 
    ); 
} 
export default Home;
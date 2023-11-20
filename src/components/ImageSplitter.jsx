import React from 'react';
import './styles/ImageSplitter.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

const ImageSplitter = ( {images, links} ) => {
    const { topImage, bottomImage } = images;
    const { topLink, bottomLink } = links;

    return (
        <div className="image-splitter">
            <div className="top">
                <Link to={topLink}><img src={topImage} alt="topImgage"></img></Link> 
            </div>
            <div className='cross-line'></div>
            <div className="bottom">
                <Link to={bottomLink}><img src={bottomImage} alt="bottomImgage"></img></Link> 
            </div>
        </div>
    );
};

export default ImageSplitter;
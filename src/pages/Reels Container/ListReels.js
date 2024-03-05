import React from "react";
import NavBar from "../../components/navigationBar/NavBar";
import SlideBar from "../../components/slideBar/SlideBar";
import Reels from "../../components/Reels/Reels";
import './ListReels.css';

const ListReels = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='reels'>
                <SlideBar />
                <Reels />
            </div>
        </div>
    );
};

export default ListReels;
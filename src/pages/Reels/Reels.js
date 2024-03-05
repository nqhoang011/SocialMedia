import React from "react";
import NavBar from "../../components/navigationBar/NavBar";
import SlideBar from "../../components/slideBar/SlideBar";
import ListReels from "../../components/listReels/ListReels";
import '../Reels/Reels.css';

const Reels = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='reels'>
                <SlideBar />
                <ListReels />
                <ListReels />
                <ListReels />
            </div>
        </div>
    );
};

export default Reels;
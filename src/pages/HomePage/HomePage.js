import React from 'react';
import NavBar from '../../components/navigationBar/NavBar';
import SlideBar from '../../components/slideBar/SlideBar';
import CreatePost from '../../components/createPost/CreatePost';
import '../HomePage/HomePage.css';

const HomePage = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='home'>
                <SlideBar />
                <CreatePost />
            </div>

        </div>
    );

};

export default HomePage;
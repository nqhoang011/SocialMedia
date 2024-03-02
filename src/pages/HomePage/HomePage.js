import React from 'react';
import NavBar from '../../components/navigationBar/NavBar';
import SlideBar from '../../components/slideBar/SlideBar';
import CreatePost from '../../components/createPost/CreatePost';
import Post from '../../components/listPosts/Post';
import '../HomePage/HomePage.css';

const HomePage = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='home'>
                <SlideBar />
                <div>
                    <CreatePost />
                    <Post />
                </div>
            </div>

        </div>
    );

};

export default HomePage;
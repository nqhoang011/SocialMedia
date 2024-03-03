import React from 'react';
import NavBar from '../../components/navigationBar/NavBar';
import SlideBar from '../../components/slideBar/SlideBar';
import CreatePost from '../../components/createPost/CreatePost';
import Post from '../../components/listPosts/Post';
import '../HomePage/HomePage.css';
import FollowingList from '../../components/followingList/FollowingList';
import FollowingSuggest from '../../components/followingList/FollowingSuggest';

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

                <div className='right-side'>
                    <FollowingSuggest />
                    <FollowingList />
                </div>

            </div>

        </div >
    );

};

export default HomePage;
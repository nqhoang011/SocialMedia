import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navigationBar/NavBar';
import SlideBar from '../../components/slideBar/SlideBar';
import CreatePost from '../../components/createPost/CreatePost';
import Post from '../../components/listPosts/Post';
import '../HomePage/HomePage.css';
import Following from '../../components/followingList/Following';
import { getFeedApi } from '../../utils/api';
import { toast } from 'react-toastify';
const HomePage = () => {
    const [feeds, setFeeds] = useState([]);
    const getData = async () => {
        try {
            let res = await getFeedApi(localStorage.getItem('id'));
            // console.log(res.data);
            setFeeds(res.data);
        } catch (error) {
            toast.error("Lỗi: " + error.message);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const PostsList = () => {
        return (
            feeds.map((item) => (
                <Post key={item.post.id} data={item} />
            ))
        )
    }

    return (
        <div className='interface'>
            <NavBar />
            <div className='home'>
                <SlideBar />
                <div>
                    <CreatePost />
                    <PostsList />
                </div>

                <Following />

            </div>

        </div >
    );
};

export default HomePage;
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navigationBar/NavBar";
import SlideBar from "../../components/slideBar/SlideBar";
import './ListReels.css';
import { toast } from "react-toastify";
import { getListReelsApi } from "../../utils/api";
import Reels from "../../components/Reels/Reels";

const ListReels = () => {
    const [videos, setVideos] = useState([]);
    const getData = async () => {
        try {
            let res = await getListReelsApi();
            // console.log(res.data);
            if (res.data !== null) {
                setVideos(res.data);
            }
        } catch (error) {
            toast.error('Error:', error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    const ReelsList = () => {
        // console.log(videos);
        return (
            videos.map((item) => (
                // console.log(item);
                <Reels key={item.post.id} data={item} />
            ))
        )
    }
    return (
        <div className='interface'>
            <NavBar />
            <div className='reels'>
                <SlideBar active={2} />
                <div className='view-reels' /*{{ display: "flex", flexDirection: "column", overflow: "auto" }}*/>
                    <ReelsList />
                </div>
            </div>
        </div>
    );
};

export default ListReels;
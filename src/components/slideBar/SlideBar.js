import { AddBoxOutlined, HomeOutlined, MoreHorizOutlined, SearchOutlined, Settings, SettingsCellOutlined, SlowMotionVideoOutlined, Spa } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../slideBar/SlideBar.css';
import defaultBG from '../../img/defaultBG.jpg';

const SlideBar = ({ active = 0 }) => {
    const [btnActive, setBtnActive] = useState(active);
    let img = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const title = localStorage.getItem('title');
    useEffect(() => {
        img = localStorage.getItem('image');
    }, [])
    return (
        <div className='slide-bar'>
            <Link to='/home' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(0)} className={btnActive === 0 ? "active" : ""}>
                    <HomeOutlined className='slidebar-icons' />
                    <span>Home</span>
                </div>
            </Link>
            <Link to='/explore' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(1)} className={btnActive === 1 ? "active" : ""}>
                    <SearchOutlined className='slidebar-icons' />
                    <span>Search</span>
                </div>
            </Link>
            <Link to='/reels' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(2)} className={btnActive === 2 ? "active" : ""}>
                    <SlowMotionVideoOutlined className='slidebar-icons' />
                    <span>Reels</span>
                </div>
            </Link>
            <Link to='/create' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(3)} className={btnActive === 3 ? "active" : ""}>
                    <AddBoxOutlined className='slidebar-icons' />
                    <span>Create</span>
                </div>
            </Link>
            <Link to='/setting' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(4)} className={btnActive === 4 ? "active" : ""}>
                    <Settings className='slidebar-icons' />
                    <span>Setting</span>
                </div>
            </Link>
            <div className='info'>
                <Link to={'/profile/' + localStorage.getItem('id')} className='slidebar-buttons'>
                    <div id='btn' onClick={() => setBtnActive(5)} className={btnActive === 5 ? "active" : ""}>
                        <div className='profile-info'>
                            <img className='profile-image' src={img === 'null' ? defaultBG : img} />
                            <h1><b>{title}</b></h1>
                            <span>@{name}</span>
                        </div>

                    </div>
                </Link>
            </div >
        </div >
    );
};

export default SlideBar;
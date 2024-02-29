import { HomeOutlined, MoreHorizOutlined, SearchOutlined, Settings, SettingsCellOutlined, Spa } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../slideBar/SlideBar.css';

const SlideBar = () => {
    const [btnActive, setBtnActive] = useState(0);
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
                    <span>Explore</span>
                </div>
            </Link>
            <Link to='/setting' className='slidebar-buttons'>
                <div id='btn' onClick={() => setBtnActive(2)} className={btnActive === 2 ? "active" : ""}>
                    <Settings className='slidebar-icons' />
                    <span>Setting</span>
                </div>
            </Link>
            <div className='info'>
                <Link to='/profile' className='slidebar-buttons'>
                    <div id='btn' onClick={() => setBtnActive(3)} className={btnActive === 3 ? "active" : ""}>
                        <div className='profile-info'>
                            <img className='profile-image' />
                            <h1><b>Hoang</b></h1>
                            <span>@QuangHoang</span>
                        </div>

                    </div>
                </Link>
                <MoreHorizOutlined className='slidebar-icons' />
            </div >
        </div >
    );
};

export default SlideBar;
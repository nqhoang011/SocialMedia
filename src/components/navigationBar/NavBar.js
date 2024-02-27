import React from 'react';
import '../navigationBar/NavBar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ChildFriendlyOutlined, Home, Message, MessageOutlined, MessageRounded, MessageSharp, MessageTwoTone, NotificationsOutlined, People, PeopleAltOutlined } from '@mui/icons-material';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/home" className='logo'>
                    <h1><span>ZNET</span></h1>
                </Link>
            </div>
            <div className="n-form-button" >
                <form className='n-form' onSubmit={(e) => e.preventDefault()} >
                    <SearchIcon className='search-icon' />
                    <input type="text"
                        placeholder='Search post'
                        id='n-search'
                    //value={search}
                    //onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div className='social-icons'>
                <Link to='/home' className='home-icon'>
                    <Home className='nav-icons' />
                </Link>
                <Link to='/notification' className='noti-icon'>
                    <NotificationsOutlined className='nav-icons' />
                </Link>
                <MessageOutlined className='nav-icons' />
                <PeopleAltOutlined className='nav-icons' />
            </div>
            <div className='user-profile'>
                <Link to='/profile'>
                    <img className='profile-image' />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
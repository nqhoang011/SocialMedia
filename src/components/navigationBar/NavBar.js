import React, { useState } from 'react';
import '../navigationBar/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ChildFriendlyOutlined, Home, Message, MessageOutlined, MessageRounded, MessageSharp, MessageTwoTone, NotificationsOutlined, People, PeopleAltOutlined } from '@mui/icons-material';
import IconNavBar from '../../img/logo-1.png';
import { Dropdown } from 'antd';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const image = localStorage.getItem('image');
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    const items = [
        {
            label: <Link to='/profile'>Profile</Link>,
            key: 0,
        },
        {
            label: <>
                <Link onClick={handleLogout} >Log out</Link >
            </>,
            key: 1,
        }
    ];
    const MenuDropdown = () => {
        return (
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <img className='profile-image' src={image} />
                </a>
            </Dropdown>
        )
    }
    return (
        <nav>
            <div>
                <Link to="/home" className='logo'>
                    <img className='img-navbar' src={IconNavBar} />
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
                <Link to='/messenger' className='mess-icon'>
                    <MessageOutlined className='nav-icons' />
                </Link>
                <PeopleAltOutlined className='nav-icons' />
            </div>
            <div className='user-profile'>
                <MenuDropdown />
            </div>
        </nav>
    );
};

export default NavBar;
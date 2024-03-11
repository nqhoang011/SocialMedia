import React, { useState } from 'react';
import '../navigationBar/NavBar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ChildFriendlyOutlined, Home, Message, MessageOutlined, MessageRounded, MessageSharp, MessageTwoTone, NotificationsOutlined, People, PeopleAltOutlined } from '@mui/icons-material';
import IconNavBar from '../../img/logo-1.png';
import { Avatar, Button, Card, Image, Modal } from 'antd';

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const ModalComponent = () => {
        return (
            < div style={{ width: "400px", height: "100vh", backgroundColor: "#422948", position: "absolute", right: 10, top: 110, zIndex: "-1", display: !isModalOpen ? 'none' : 'block' }} >

            </div >
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

                <a style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                    onClick={showModal}>
                    <NotificationsOutlined className='nav-icons' style={{ color: "white" }} />
                </a    >
                <ModalComponent />

                <Link to='/messenger' className='mess-icon'>
                    <MessageOutlined className='nav-icons' />
                </Link>
                <Link className='mess-icon'>
                    <PeopleAltOutlined className='nav-icons' /></Link>


                <Link to='/profile' className='mess-icon'>
                    <Avatar className='nav-icons'></Avatar>
                </Link>

            </div>
        </nav>
    );
};

export default NavBar;
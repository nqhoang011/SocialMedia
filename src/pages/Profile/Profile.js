import React from 'react';
import '../Profile/Profile.css';
import NavBar from '../../components/navigationBar/NavBar';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import SlideBar from '../../components/slideBar/SlideBar';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    // console.log(id);
    return (
        <div className='interface'>
            <NavBar />
            <div className='profile'>
                <div>
                    <SlideBar active={5} />
                </div>
                <div className='profile-border'>
                    <ProfileInfo key={id} dataId={id} />
                </div>

            </div>
        </div>
    );
};

export default Profile;
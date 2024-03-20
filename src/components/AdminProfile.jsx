import React from 'react';
import { Avatar } from 'antd';
import './AdminInfo.css';

const AdminProfile = ({ avatarSrc, name, gender, age, email }) => {
    return (
        <div className="admin-info">
            <div className="avatar-container">
                <Avatar className="avatar" src={avatarSrc} size={150} />
            </div>
            <div className="info-items">
                <div className="info-item">
                    <label>Name:</label>
                    <p>{name}</p>
                </div>
                <div className="info-item">
                    <label>Gender:</label>
                    <p>{gender}</p>
                </div>
                <div className="info-item">
                    <label>Age:</label>
                    <p>{age}</p>
                </div>
                <div className="info-item">
                    <label>Email:</label>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;

import React from 'react';
import AdminProfile from '../components/AdminProfile';

const Dashboard = () => {

    const adminData = {
        avatarSrc: "/path/to/avatar.jpg",
        name: "Mingg",
        gender: "Male",
        age: 20,
        email: "admin@example.com"
    };

    return (
        <div>
            <h1>Admin Profile</h1>
            <AdminProfile {...adminData} />
        </div>
    );
};

export default Dashboard;
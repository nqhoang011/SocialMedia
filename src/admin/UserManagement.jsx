import React, { useState } from 'react';
import UserList from '../components/UserList';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, userId: 'user001', name: 'John Doe', gender: 'Male', email: 'john.doe@example.com' },
        { id: 2, userId: 'user002', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 3, userId: 'user003', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 4, userId: 'user004', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 5, userId: 'user005', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 6, userId: 'user006', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 7, userId: 'user007', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 8, userId: 'user008', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 9, userId: 'user009', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
        { id: 10, userId: 'user010', name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com' },
    ]);

    const handleEdit = (record) => {
        // Handle edit logic
        console.log('Edit user:', record);
    };

    const handleDelete = (id) => {
        // Handle delete logic
        console.log('Delete user with ID:', id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <UserList users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
};

export default UserManagement;

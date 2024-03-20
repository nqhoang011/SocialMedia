import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import './UserList.css';

const { Option } = Select;

const UserList = ({ users, handleEdit, handleDelete }) => {
    const usersPerPage = 5; // Số người dùng tối đa trên mỗi trang
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại, mặc định là trang đầu tiên
    const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái hiển thị modal

    // Các trường thông tin của người dùng mới
    const [newUserInfo, setNewUserInfo] = useState({
        userId: '',
        name: '',
        gender: '',
        email: ''
    });

    // Hàm xử lý sự kiện click nút "Add User"
    const handleAddUser = () => {
        setIsModalVisible(true);
    };

    // Hàm xử lý sự kiện ẩn modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Hàm xử lý thay đổi giá trị trường thông tin người dùng mới
    const handleChangeUserInfo = (key, value) => {
        setNewUserInfo({
            ...newUserInfo,
            [key]: value
        });
    };

    // Hàm xử lý submit form để thêm người dùng mới
    const handleSubmit = () => {
        // Xử lý submit form ở đây (gọi API, thêm người dùng vào danh sách, ...)
        console.log("New user info:", newUserInfo);
        setIsModalVisible(false); // Ẩn modal sau khi xử lý xong
    };

    // Tính chỉ mục của người dùng đầu tiên và cuối cùng trên trang hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Tính toán số trang dựa trên số lượng người dùng và số lượng người dùng trên mỗi trang
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Xử lý sự kiện chuyển trang
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <span>
                    <Button onClick={() => handleEdit(record)}>Edit</Button>
                    <Button onClick={() => handleDelete(record.id)}>Delete</Button>
                </span>
            ),
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 30 }}>
                <Button type="primary" className="add-user-button" onClick={handleAddUser}>Add User</Button> {/* Thêm sự kiện */}
            </div>
            <Table dataSource={currentUsers} columns={columns} rowKey="id" pagination={false} />
            {totalPages > 1 && (
                <Button.Group style={{ marginTop: 16 }}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button key={i + 1} onClick={() => handleChangePage(i + 1)}>{i + 1}</Button>
                    ))}
                </Button.Group>
            )}
            {/* Modal để thêm người dùng mới */}
            <Modal
                title="Add User"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                    <Button key="submit" type="primary" onClick={handleSubmit} style={{ background: '#6a0728', border: 'none' }}>Submit</Button>
                ]}
            >
                <Form>
                    <Form.Item style={{ paddingTop: '20px' }} label="Name">
                        <Input value={newUserInfo.name} onChange={(e) => handleChangeUserInfo('name', e.target.value)} />
                    </Form.Item>
                    <div className="form-row">
                        <Form.Item label="User ID" className="user-id-input">
                            <Input value={newUserInfo.userId} onChange={(e) => handleChangeUserInfo('userId', e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Gender" className="gender-select">
                            <Select value={newUserInfo.gender} onChange={(value) => handleChangeUserInfo('gender', value)}>
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <Form.Item label="Email">
                        <Input value={newUserInfo.email} onChange={(e) => handleChangeUserInfo('email', e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserList;

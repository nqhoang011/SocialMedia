import React, { useState } from 'react';
import { Layout, Menu, Avatar, Typography, Popover, Modal, Form, Input, Button } from 'antd';
import { UserOutlined, DesktopOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import Post from './Post';
import './AdminPage.css'

const { Sider, Content, Header } = Layout;
const { Text } = Typography;

const AdminPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showChangePasswordModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleLogout = () => {
        // Xử lý logic đăng xuất
        console.log("Logout clicked");
    };

    const onFinish = (values) => {
        // Xử lý logic thay đổi mật khẩu
        console.log("Change password values:", values);
        setIsModalVisible(false); // Ẩn modal sau khi xử lý xong
    };

    const content = (
        <div>
            <p className="hover-effect" onClick={showChangePasswordModal}>Change Password</p>
            <p className="hover-effect" onClick={handleLogout}>Log out</p>
        </div>
    );

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={300}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
                        <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
                            <Link to="/dashboard">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="userManagement" icon={<UserOutlined />}>
                            <Link to="/user-management">User Management</Link>
                        </Menu.Item>
                        <Menu.Item key="posts" icon={<DesktopOutlined />}>
                            <Link to="/posts">Posts</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#7b6d8224', padding: 30, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Avatar src="/path/to/avatar.jpg" size={32} />
                        <div style={{ marginLeft: 10 }}>
                            <Text strong>Admin</Text>
                        </div>
                        <Popover content={content} trigger="click">
                            <SettingOutlined style={{ fontSize: '20px', marginLeft: '30px' }} />
                        </Popover>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, minHeight: 360 }}>
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/user-management" element={<UserManagement />} />
                                <Route path="/posts" element={<Post />} />
                            </Routes>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Modal title="Change Password" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form name="change-password-form" onFinish={onFinish} style={{ padding: '15px' }}>
                    <Form.Item name="oldPassword" rules={[{ required: true, message: 'Please input your old password!' }]}>
                        <Input.Password placeholder="Old Password" />
                    </Form.Item>
                    <Form.Item name="newPassword" rules={[{ required: true, message: 'Please input your new password!' }]}>
                        <Input.Password placeholder="New Password" />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ background: '#6a0728', border: 'none' }}>Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Router>
    );
};

export default AdminPage;

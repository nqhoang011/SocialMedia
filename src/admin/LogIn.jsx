// Trong file LogIn.jsx
import React from 'react';
import { Row, Col, Card, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../img/logo-bg.png';
import './Login.css';

const { Title } = Typography;

const LogIn = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div className="login-container">
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                    <Card className="login-card" bordered={false}>
                        <div className="logo-container">
                            <img src={logo} alt="Logo" className="logo" />
                        </div>
                        <Title level={3} className="login-title">Welcom to Admin Page!</Title>
                        <Form name="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                <Input prefix={<UserOutlined />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LogIn;

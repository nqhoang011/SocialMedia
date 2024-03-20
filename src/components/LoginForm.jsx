// LoginForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (values) => {
        console.log('Login form submitted:', values);
        // Add logic to handle login
    };

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;

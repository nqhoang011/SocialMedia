import React, { useState } from 'react';
import { Layout, List, Avatar, Button } from 'antd';
import Conversation from './Conversation';
import styles from './ChatFriend.module.css';
import avtChat from "../../img/bg1.jpg";
import { UserAddOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const ChatPage = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1, name: 'Mingg', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Minh' },
        { id: 2, name: 'Hoàng', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Hoàng nè có thấy hong' },
        { id: 3, name: 'Hậu', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Hậu' },
    ];

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <Layout className={styles.content}>
            <Sider width={370} style={{ background: '#d8cdcd' }} className={styles.left}>
                <div className={styles.header}>
                    <Avatar src={avtChat} />
                    <span className={styles.profileName}>ming__3</span>
                    <Button
                        type="primary"
                        icon={<UserAddOutlined />}
                        onClick={() => handleUserClick(null)} // Clear selected user when clicking "New Chat"
                        className={styles.newChatButton}
                        style={{ background: '#660029' }}
                    >
                        New Chat
                    </Button>
                </div>
                {/* Danh sách người nhắn */}
                <List
                    className={styles.messageList}
                    dataSource={users}
                    renderItem={(user) => (
                        <List.Item
                            key={user.id}
                            onClick={() => handleUserClick(user)} // Handle click event for each user
                            style={{ cursor: 'pointer' }}
                            className={styles.itemContainer}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={user.avatar} className={styles.avatar} />}
                                title={<div className={styles.messageContent}>{user.name}</div>}
                                description={<div className={styles.messageContent}>{truncateText(user.lastMessage, 35)}</div>}
                            />
                        </List.Item>
                    )}
                />
            </Sider>
            <Content style={{ paddingLeft: '20px' }} className={styles.right}>
                <Conversation selectedUser={selectedUser} />
            </Content>
        </Layout>
    );
};

export default ChatPage;

import React, { useState } from 'react';
import { Layout, Avatar, Button, Modal, List } from 'antd';
import Conversation from './Conversation';
import styles from './ChatFriend.module.css';
import avtChat from "../../img/bg1.jpg";
import { UserAddOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const ChatFriend = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showFriendListModal, setShowFriendListModal] = useState(false);

    const messagesFromSenders = [
        { id: 1, sender: 'Mingg', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Minh' },
        { id: 2, sender: 'Hoàng', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Hoàng nè có thấy hong' },
        { id: 3, sender: 'Hậu', avatar: avtChat, lastMessage: 'Tin nhắn mới nhất từ Hậu' },
    ];

    const users = [
        { id: 1, name: 'Mingg', avatar: avtChat },
        { id: 2, name: 'Hoàng', avatar: avtChat },
        { id: 3, name: 'Hậu', avatar: avtChat },
        { id: 4, name: 'Hải', avatar: avtChat },
        { id: 5, name: 'Hoa', avatar: avtChat },
    ];

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleNewChatClick = () => {
        setShowFriendListModal(true);
    };

    const handleSendButtonClick = (user) => {
        setSelectedUser(user);
        setShowFriendListModal(false);
    };

    const handleCloseModal = () => {
        setShowFriendListModal(false);
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
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
                        onClick={handleNewChatClick}
                        className={styles.newChatButton}
                        style={{ background: '#660029' }}
                    >
                        New Chat
                    </Button>
                </div>
                <List
                    className={styles.messageList}
                    dataSource={messagesFromSenders}
                    renderItem={(message) => (
                        <List.Item
                            key={message.id}
                            onClick={() => handleUserClick(message)}
                            style={{ cursor: 'pointer' }}
                            className={styles.itemContainer}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={message.avatar} className={styles.avatar} />}
                                title={<div className={styles.messageContent}>{message.sender}</div>}
                                description={<div className={styles.messageContent}>{truncateText(message.lastMessage, 35)}</div>}
                            />
                        </List.Item>
                    )}
                />
            </Sider>
            <Content style={{ paddingLeft: '20px' }} className={styles.right}>
                <Conversation selectedUser={selectedUser} messages={messagesFromSenders} />
            </Content>

            <Modal
                title="List Friend"
                visible={showFriendListModal}
                onCancel={handleCloseModal}
                footer={null}
            >

                <List
                    dataSource={users}
                    renderItem={(user) => (
                        <List.Item key={user.id} className={styles.friendListItem}>
                            <List.Item.Meta
                                avatar={<Avatar src={user.avatar} />}
                                title={user.name}
                            />
                            <Button style={{ background: '#660029' }} type="primary" onClick={() => handleSendButtonClick(user)}>Send</Button>
                        </List.Item>
                    )}
                />
            </Modal>
        </Layout>
    );
};

export default ChatFriend;

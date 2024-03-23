import React from 'react';
import { Avatar, Input, Button } from 'antd';
import styles from './Conversation.module.css';

const Conversation = ({ selectedUser, messages }) => {
    return (
        <div className={styles.conversationContainer}>
            {selectedUser && (
                <>
                    {/* Phần thông tin người nhắn */}
                    <div className={styles.userInfo}>
                        <Avatar src={selectedUser.avatar} size={64} />
                        <div className={styles.userInfoText}>
                            <h3 className={styles.userName}>{selectedUser.name}</h3>
                            <p className={styles.userStatus}>Đang hoạt động</p>
                        </div>
                    </div>
                    {/* Phần cuộc trò chuyện */}
                    <div>
                        {messages
                            .filter(message => message.sender === selectedUser.name)
                            .map(message => (
                                <div key={message.id} className={styles.messageContainer}>
                                    <div className={styles.message}>{message.lastMessage}</div>
                                </div>
                            ))}
                        <div className={styles.messageInput}>
                            <Input placeholder="Texting..." />
                            <Button type="primary" style={{ background: '#660029' }} className={styles.sendButton}>Send</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Conversation;

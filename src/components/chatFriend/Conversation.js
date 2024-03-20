import React from 'react';
import { Avatar, Input, Button } from 'antd';
import styles from './Conversation.module.css';

const Conversation = ({ selectedUser }) => {
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
                        <div className={styles.messageContainer}>
                            <div className={styles.message}>Mai nhớ lên trường </div>
                            <div className={styles.senderMessage}>Biết rồi nói quài</div>
                        </div>
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

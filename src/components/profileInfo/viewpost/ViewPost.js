import { Avatar, Modal, Row, Col, Input, Button } from 'antd';
import React, { useState } from 'react';
import bg1 from '../../../img/bg1.jpg';
import './ViewPost.css';

const Comment = ({ author, content }) => (
    <div className='cmt-border'>
        <div className='top-right'>
            <Avatar />
            <a>{author}</a>
        </div>
        <p style={{ marginLeft: 35 }}>{content}</p>
    </div>
);

const ViewPost = ({ viewPost, onClose }) => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
        { author: 'Myname', content: 'looks good' },
        { author: 'AnotherUser', content: 'Nice post!' },
        { author: 'User3', content: 'Great content!' },
        { author: 'User3', content: 'Great content!' },
        { author: 'User3', content: 'Great content!' },
        { author: 'User3', content: 'Great content!' },
    ]);

    const handleClose = () => {
        onClose(false);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { author: 'YourName', content: newComment }]);
            setNewComment('');
        }
    };

    return (
        <Modal
            centered
            visible={viewPost}
            width={1200}
            footer={null}
            onCancel={() => onClose(false)}
        >
            <Row gutter={[16, 16]} align='start'>
                <Col span={12}>
                    <div className='img-container'>
                        <img src={bg1} className='image-content' alt='Post' />
                    </div>
                </Col>
                <Col span={12}>
                    <div className='right-side'>
                        <div className='top-right'>
                            <Avatar />
                            <a>Author's name</a>
                        </div>
                        <p className='post-content'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <div className='add-comment'>
                            <Input.TextArea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder='Write a new comment'
                            />
                            <Button type='primary' onClick={handleAddComment} style={{ background: '#6a0728' }}>Add Comment</Button>
                        </div>
                        <div className='cmt-container'>
                            <div className='cmt'>
                                {comments.map((comment, index) => (
                                    <Comment key={index} author={comment.author} content={comment.content} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};

export default ViewPost;

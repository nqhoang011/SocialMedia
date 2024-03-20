import { Avatar, Modal, Row, Col, Input, Button } from 'antd';
import { HeartOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './ViewPost.css';
import { Title } from '@mui/icons-material';

const Comment = ({ author, content }) => (
    <div className='cmt-border'>
        <div className='top-right'>
            <Avatar />
            <a>{author}</a>
        </div>
        <p style={{ marginLeft: 35 }}>{content}</p>
    </div>
);

const ViewPost = ({ viewPost, onClose, postData, user = null }) => {
    // console.log(postData);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState(postData.comments);

    const handleClose = () => {
        onClose(false);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { author: 'YourName', content: newComment }]);
            setNewComment('');
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = postData.post.images;
    // console.log(images);
    const handleClickPrev = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const handleClickNext = () => {
        setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
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
                <Col span={9}>
                    <div className='img-container'>
                        <img src={images[currentIndex].image} className='image-content' alt='Post' />
                        <button className="prev-btn" onClick={handleClickPrev}>&#10094;</button>
                        <button className="next-btn" onClick={handleClickNext}>&#10095;</button>
                    </div>
                </Col>
                <Col span={15}>
                    <div className='right-side'>
                        <div className='top-right'>
                            <Avatar src={localStorage.getItem('image')} />
                            <a>{localStorage.getItem('title')}</a>
                        </div>
                        <p className='post-content'>
                            {postData.post.content}
                        </p>
                        <div className='add-comment'>
                            <div className='icons'>
                                <div>
                                    <Button type='text' icon={<HeartOutlined />} />
                                    <a>{postData.favorites.length}</a>
                                </div>

                                <Button type='text' icon={<CommentOutlined />} />
                                <Button type='text' icon={<ShareAltOutlined />} />
                            </div>
                            <Input.TextArea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder='Write a new comment'
                            />
                            <Button type='primary' onClick={handleAddComment} style={{ background: '#6a0728' }}>Add Comment</Button>
                        </div>
                        <div className='cmt-container'>
                            {/* <div className='cmt'>
                                {comments.map((comment, index) => (
                                    <Comment key={index} author={comment.author} content={comment.content} />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};
export default ViewPost;

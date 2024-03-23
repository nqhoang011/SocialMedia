import Profile from "../../img/bg1.jpg";
import React, { useState } from "react";
import styles from "./Post.module.css";
import { ChatBubbleOutline, FavoriteBorderOutlined, InsertEmoticonOutlined, MoreHoriz, SendOutlined } from '@mui/icons-material';
import ViewPost from "../profileInfo/viewpost/ViewPost";
import { HeartOutlined, HeartFilled, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button } from "antd";

const Post = ({ data }) => {
    const [viewPost, setViewPost] = useState(false);
    const [liked, setLiked] = useState(false);
    const handleViewPost = () => {
        setViewPost(true);
    }
    const handleClosePost = (close) => {
        setViewPost(close);
    }
    const handleLikePost = () => {
        setLiked(true);
    }
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header1}>
                        <img
                            className={styles.avatarCircleIcon}
                            // alt=""
                            src={data.user.image}
                        />
                        <div className={styles.userName}>
                            <div className={styles.userName1}>
                                <a className={styles.nickName}>
                                    {data.user.name}
                                </a>
                            </div>
                        </div>
                        {/* <div className={styles.time}>
                            <div className={styles.time1}>
                                <div className={styles.hourAgo}> • 1 hour ago</div>
                            </div>
                        </div> */}
                        <div className={styles.moreOptions}>
                            <div className={styles.icon}>
                                <i style={{ cursor: "pointer" }}><MoreHoriz /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.postImg}>
                <div className={styles.div} />
                <img className={styles.icon1} src={data.post.images[0].image} />
            </div>
            <div className={styles.footer}>
                {/* <div className={styles.border}>
                    <div className={styles.border1} />
                </div> */}
                <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                        <div>
                            <Button type='text'
                                icon={
                                    liked === false ?
                                        <HeartOutlined style={{
                                            color: '#ffffff',
                                            fontSize: '20px'
                                        }} />
                                        :
                                        <HeartFilled style={{
                                            color: '#ffffff',
                                            fontSize: '20px'
                                        }} />
                                }
                                onClick={() => setLiked(!liked)} />
                            <a>{data.favorites.length}</a>
                        </div>

                        <Button type='text'
                            icon={<CommentOutlined
                                style={{
                                    color: '#ffffff',
                                    fontSize: '20px'
                                }} />} />
                        <Button type='text'
                            icon={<ShareAltOutlined
                                style={{
                                    color: '#ffffff',
                                    fontSize: '20px'
                                }} />} />
                    </div>
                </div>
                <div className={styles.likes}>
                    <div className={styles.nickName}>{data.post.content}</div>
                    {/* <div className={styles.likes1}> Likes</div> */}
                </div>

                <div className={styles.addcomment}>
                    <div className={styles.border2}>
                        <div className={styles.border3} />
                    </div>
                    <div className={styles.addcomment1}>
                        <div className={styles.iconParent}>
                            <div className={styles.icon2}>
                                <InsertEmoticonOutlined className={styles.iconsmore} />
                            </div>
                            <input
                                type='text'
                                className={styles.newComment}
                                placeholder="Add a comment..."
                                required />
                            <div className={styles.postBtn}>
                                <button className={styles.post1}>post</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border4}>
                        <div className={styles.border3} />
                    </div>
                </div>
                {/* <div className={styles.border6}>
                    <div className={styles.border1} />
                </div> */}
                {data.comments !== null &&
                    <div className={styles.comment}>
                        <div className={styles.userComment}>
                            <div className={styles.frameParent}>
                                <div className={styles.userNameParent}>
                                    <div className={styles.userName2}>
                                        <div className={styles.nickName1}>{`vtv post `}</div>
                                    </div>
                                    <div className={styles.userComment1}>
                                        <div className={styles.imperdietInSit}>
                                            Hai vay xinh xinh, ca vang boi trong be nuoc, ngoi len, lan xuong, ca vang mua tung tang.
                                        </div>
                                    </div>
                                </div>
                                <a className={styles.moreIcon}
                                    onClick={() => {

                                    }}>
                                    <i className={styles.imperdietInSit}>
                                        <span>...</span>
                                        <span className={styles.more1}>more</span>
                                    </i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.commentHeader}>
                            <div>
                                <i onClick={handleViewPost}>View all 100 comments</i>
                                {viewPost === true && <ViewPost onClose={handleClosePost} postData={data} />}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default Post;
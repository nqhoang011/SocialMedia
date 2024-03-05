// import { BlockOutlined, SentimentDissatisfied, VolumeMuteOutlined } from '@mui/icons-material';
// import React, { useState } from 'react';
// import Profile from '../../img/bg1.jpg';
// import '../listPost/Post.css';
// import { Button } from '@mui/material';

// const Post = () => {
//     const [showDelete, setShowDelete] = useState(false);
//     return (
//         <div className='post'>
//             <div className='post-header'>
//                 <Link to="/friendId" style={{ textDecoration: "none" }}>
//                     <div className='post-user' style={{ cursor: "pointer" }}>
//                         <img src={Profile} className='p-img' alt="" />
//                         <h2>Hau</h2>
//                         <p className='datePara'>2 hours ago</p>
//                     </div>
//                 </Link>
//                 <div className='delete'>
//                     {showDelete && (
//                         <div className='option'>
//                             <button><SentimentDissatisfied />Not interested in this post</button>
//                             <button><VolumeMuteOutlined />Mute this user</button>
//                             <button><BlockOutlined />Block this user</button>
//                             <button><Report</button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Post;
import Profile from "../../img/bg1.jpg";
import React from "react";
import styles from "./Post.module.css";
import { ChatBubbleOutline, FavoriteBorderOutlined, InsertEmoticonOutlined, MoreHoriz, SendOutlined } from '@mui/icons-material';

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header1}>
                        <img
                            className={styles.avatarCircleIcon}
                            alt=""
                            src={Profile}
                        />
                        <div className={styles.userName}>
                            <div className={styles.userName1}>
                                <div className={styles.nickName}>
                                    VTV24
                                </div>
                            </div>
                        </div>
                        <div className={styles.time}>
                            <div className={styles.time1}>
                                <div className={styles.hourAgo}> • 1 hour ago</div>
                            </div>
                        </div>
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
                <img className={styles.icon1} alt="" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/428682762_722357756766765_8872614249068926625_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEYxFnn5ZxikWbqmV9OzVSL0QAWtzDgQXbRABa3MOBBdpvl6uT2RbVUhbUHfo6wkoHcpAvfW5oJjxcbZ51Fi0vs&_nc_ohc=2Zboj9ofL6gAX9ft0qK&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfCMPwEdmXgLdEhnvyJhI1pacm-eKLE9Zo6stBk69_KqtA&oe=65E6F675" />
            </div>
            <div className={styles.footer}>
                <div className={styles.border}>
                    <div className={styles.border1} />
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                        <div className={styles.con}>
                            <FavoriteBorderOutlined className={styles.iconsmore} />
                        </div>
                        <div className={styles.con1}>
                            <ChatBubbleOutline className={styles.iconsmore} />
                        </div>
                        <div className={styles.con2}>
                            <SendOutlined className={styles.iconsmore} />
                        </div>
                    </div>
                </div>
                <div className={styles.likes}>
                    <div className={styles.nickName}>1.069</div>
                    <div className={styles.likes1}> Likes</div>
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
                <div className={styles.border6}>
                    <div className={styles.border1} />
                </div>
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
                            <div className={styles.moreIcon}>
                                <i className={styles.imperdietInSit}>
                                    <span>...</span>
                                    <span className={styles.more1}>more</span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentHeader}>
                        <i><div className={styles.addAComment}>View all 100 comments</div></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
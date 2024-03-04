import React from "react";
import styles from "./ChatFriend.module.css";
import { ExpandMore, EditCalendar, MapsUgc } from '@mui/icons-material';

const ChatFriend = () => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <div className={styles.header1}>
                        <div className={styles.header2}>
                            <div className={styles.headerText}>
                                <div className={styles.profileNameParent}>
                                    <div className={styles.profileName}>
                                        <div className={styles.nickName}>Min_Lytro</div>
                                    </div>
                                    <div className={styles.icon}>
                                        <i style={{ cursor: "pointer" }}> <ExpandMore /></i>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.icon1}>
                                <i style={{ cursor: "pointer" }}> <EditCalendar /></i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border}>
                        <div className={styles.border1} />
                    </div>
                </div>
                <div className={styles.messenger}>
                    <div className={styles.messageProfile}>
                        <div className={styles.profilePic}>
                            <div className={styles.profilePicS} />
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.profileName1}>
                                <div className={styles.trerrylucas}>hoang_011</div>
                            </div>
                            <div className={styles.time}>
                                <div className={styles.active1hAgo}>Hello</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.messageProfile}>
                        <div className={styles.profilePic}>
                            <div className={styles.profilePicS} />
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.profileName1}>
                                <div className={styles.trerrylucas}>hauCutenek</div>
                            </div>
                            <div className={styles.time}>
                                <div className={styles.active1hAgo}>
                                    Ngay mai di học may gio
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.content1}>
                    <div className={styles.content2}>
                        <i className={styles.icon2} style={{ cursor: "pointer" }}> <MapsUgc /></i>
                        <div className={styles.header3}>
                            <div className={styles.header4}>
                                <div className={styles.yourMessages}>Your Messages</div>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.text1}>
                                <div className={styles.active1hAgo}>
                                    Send private photos and messages to a friend or group.
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.button1}>
                                <div className={styles.sendMessageWrapper}>
                                    <button className={styles.sendMessage}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatFriend;

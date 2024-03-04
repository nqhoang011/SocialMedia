import React from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, ExpandRounded, GridOnOutlined, VideoLibrary } from "@mui/icons-material";

const imageDisplay = () => {
    return (
        <img src={bg1} className={styles.postImage} />
    );
}

const ProfileInfo = () => {
    return (
        <div className={styles.userProfilebody}>
            <div className={styles.header}>
                <div className={styles.profilePic}>
                    <Avatar src={bg1}
                        sx={{
                            width: "150px",
                            height: "150px"
                        }} />
                </div>
                <div className={styles.desc}>
                    <div className={styles.account}>
                        <div className={styles.terrylucas}>Min_Lytro</div>
                        <button className={styles.follow}>Edit Profile</button>
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.posts}>99 posts</div>
                        <div className={styles.posts}>9M followers</div>
                        <div className={styles.posts}>9 following</div>
                    </div>
                    <div className={styles.profileName1}>
                        <div className={styles.terryLucas}>Minh Bui</div>
                    </div>
                </div>
            </div>
            <div className={styles.storys}>
                <div className={styles.story}>
                    <AddCircle className={styles.avatarProfilePicIcon} />
                    <div className={styles.avatarName}>
                        <div className={styles.madeUsWrapper}>
                            <div className={styles.madeUs}>New</div>
                        </div>
                    </div>
                </div>
                <div className={styles.story}>
                    <img
                        className={styles.avatarProfilePicIcon}
                        alt=""
                        src={bg1}
                    />
                    <div className={styles.avatarName}>
                        <div className={styles.madeUsWrapper}>
                            <div className={styles.madeUs}>My</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.toogle}>
                <div className={styles.toogle1}>
                    <div className={styles.button5}>
                        <div className={styles.buttonIcon}>
                            <GridOnOutlined />
                        </div>
                        <div className={styles.buttonTitle}>
                            <b className={styles.posts3}>POSTS</b>
                        </div>
                    </div>
                    <div className={styles.button5}>
                        <div className={styles.buttonIcon}>
                            <VideoLibrary />
                        </div>
                        <div className={styles.buttonTitle}>
                            <div className={styles.posts4}>reels</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.userPosts}>
                <img src={bg1} className={styles.postImage} />
                <img src={bg1} className={styles.postImage} />
                <img src={bg1} className={styles.postImage} />
                <img src={bg1} className={styles.postImage} />
            </div>
        </div>
    );
};
export default ProfileInfo;
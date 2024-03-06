import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar, Button, Modal } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, Close, GridOnOutlined, SaveAltOutlined, VideoLibrary } from "@mui/icons-material";

const ImageDisplay = () => {
    return (
        <img src={bg1} alt="" className={styles.postImage} />
    );
}

const EditForm = ({ open, setOpen }) => {
    return (
        <Modal className={styles.modal}
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className={styles.formBorder}>
                <div className={styles.titleForm}>
                    <h2>Edit Profile</h2>
                    <Close onClick={() => setOpen(false)}
                        className={styles.btnClose} />
                </div>
                <form className={styles.editForm}>
                    <input
                        className={styles.formInput}
                        type="text"
                        // value={ }
                        placeholder="Enter Your Name"
                        required />
                    <input
                        className={styles.formInput}
                        type="text"
                        // value={ }
                        placeholder="Enter Username"
                        required />
                    <div className={styles.btnSave}>
                        <Button variant="contained">Save</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

const ProfileInfo = () => {
    const [open, setOpen] = useState(false);
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
                        <div className={styles.nickName}>Min_Lytro</div>
                        <button
                            className={styles.editProfile}
                            onClick={() => setOpen(true)}>Edit Profile</button>
                        <EditForm
                            open={open}
                            setOpen={setOpen}
                        />
                    </div>
                    <div className={styles.tag}>
                        <div className={styles.viewer}>99 </div>
                        <div className={styles.posts}>posts</div>
                        <div className={styles.viewer}>9M </div>
                        <div className={styles.posts}>followers</div>
                        <div className={styles.viewer}>9 </div>
                        <div className={styles.posts}>following</div>
                    </div>
                    <div className={styles.profileName1}>
                        <div className={styles.viewer}>Minh Bui</div>
                    </div>
                </div>
            </div>
            <div className={styles.storys}>
                <div className={styles.story}>
                    <AddCircle
                        className={styles.avatarProfilePicIcon}
                        sx={{
                            width: "77px",
                            height: "77px"
                        }} />
                    <div className={styles.avatarName}>
                        <div className={styles.madeUsWrapper}>
                            <div className={styles.madeUs}>New</div>
                        </div>
                    </div>
                </div>
                <div className={styles.story}>
                    <img
                        className={styles.avatarProfilePicIcon1}
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
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
                <ImageDisplay />
            </div>
        </div>
    );
};
export default ProfileInfo;
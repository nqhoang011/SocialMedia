import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar, Box, Button, Modal } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, Close, GridOnOutlined, SaveAltOutlined, VideoLibrary } from "@mui/icons-material";
import { FixedSizeList } from "react-window";

const ImageDisplay = () => {
    return <img src={bg1} className={styles.postImage} />
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
                        <Button variant="contained"
                            onClick={() => setOpen(false)}>Save</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

const ShowFollowers = ({ openFollowers, setOpenFollowers }) => {
    return (
        <Modal className={styles.modal}
            open={openFollowers}
            onClose={() => setOpenFollowers(false)}
        >
            <div className={styles.formBorder2}>
                <div className={styles.titleForm}>
                    <h2>Followers</h2>
                    <Close onClick={() => setOpenFollowers(false)}
                        className={styles.btnClose} />
                </div>
                <div className={styles.editForm}>
                    <Box sx={{
                        width: '100%',
                        height: '550px',
                        maxWidth: '265px',
                        bgcolor: 'white'
                    }}>
                        {/* <FixedSizeList
                            height={400}
                            width={360}
                            itemSize={46}
                            itemCount={5}
                            overscanCount={5}
                        >
                        </FixedSizeList> */}
                    </Box>
                    <div className={styles.btnSave}>
                        <Button variant="contained"
                            onClick={() => setOpenFollowers(false)}>Close</Button>
                    </div>
                </div>
            </div>
        </Modal >
    );
}

const ProfileInfo = () => {
    const [open, setOpen] = useState(false);
    const [openFollowers, setOpenFollowers] = useState(false);
    const [openFollowings, setOpenFollowings] = useState(false);
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const title = localStorage.getItem('title');
    return (
        <div className={styles.userProfilebody}>
            <div className={styles.header}>
                <div className={styles.profilePic}>
                    <Avatar src={image}
                        sx={{
                            width: "150px",
                            height: "150px"
                        }} />
                </div>
                <div className={styles.desc}>
                    <div className={styles.account}>
                        <div className={styles.nickName}>{name}</div>
                        <button
                            className={styles.editProfile}
                            onClick={() => setOpen(true)}>Edit Profile</button>
                        <EditForm
                            open={open}
                            setOpen={setOpen}
                        />
                    </div>
                    <div className={styles.tag}>
                        <a className={styles.count}>
                            <div className={styles.viewer}>99 </div>
                            <div className={styles.posts}> posts</div>
                        </a>
                        <a className={styles.count}
                            onClick={() => {
                                setOpenFollowers(true);

                            }}>
                            <div className={styles.viewer}>9M </div>
                            <div className={styles.posts}> followers</div>
                        </a>
                        <ShowFollowers openFollowers={openFollowers}
                            setOpenFollowers={setOpenFollowers} />
                        <a className={styles.count}>
                            <div className={styles.viewer}>9 </div>
                            <div className={styles.posts}>following</div>
                        </a>

                    </div>
                    <div className={styles.profileName1}>
                        <div className={styles.viewer}>{title}</div>
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
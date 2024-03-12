import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar, Box, Button, Modal } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, Close, GridOnOutlined, SaveAltOutlined, VideoLibrary } from "@mui/icons-material";
import ListFollowing from "./ListFollowing";
import ListFollowers from "./ListFollowers";
import { getCountFollowersApi, getCountFollowingsApi } from "../../utils/api";
import { toast } from "react-toastify";

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
                    <ListFollowers />
                    <div className={styles.btnSave}>
                        <Button variant="contained"
                            onClick={() => setOpenFollowers(false)}>Close</Button>
                    </div>
                </div>
            </div>
        </Modal >
    );
}

const ShowFollowings = ({ openFollowings, setOpenFollowings }) => {
    return (
        <Modal className={styles.modal}
            open={openFollowings}
            onClose={() => setOpenFollowings(false)}
        >
            <div className={styles.formBorder2}>
                <div className={styles.titleForm}>
                    <h2>Followings</h2>
                    <Close onClick={() => setOpenFollowings(false)}
                        className={styles.btnClose} />
                </div>
                <div className={styles.editForm}>
                    <ListFollowing />
                    <div className={styles.btnSave}>
                        <Button variant="contained"
                            onClick={() => setOpenFollowings(false)}>Close</Button>
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
    const [cntFollowers, setCntFollowers] = useState(0);
    const [cntFollowings, setCntFollowings] = useState(0);

    const getData = async () => {
        try {
            let res = await getCountFollowersApi();
            setCntFollowers(res.data.length);
            res = await getCountFollowingsApi();
            setCntFollowings(res.data.length);
        }
        catch (error) {
            toast.error('Lỗi: ' + error.messase);
        }
    }
    useEffect(() => {
        getData();
    }, []);

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
                            <div className={styles.viewer}>{cntFollowers} </div>
                            <div className={styles.posts}> followers</div>
                        </a>
                        <ShowFollowers openFollowers={openFollowers}
                            setOpenFollowers={setOpenFollowers} />
                        <a className={styles.count}
                            onClick={() => {
                                setOpenFollowings(true);
                            }}>
                            <div className={styles.viewer}>{cntFollowings} </div>
                            <div className={styles.posts}>following</div>
                        </a>
                        <ShowFollowings openFollowings={openFollowings}
                            setOpenFollowings={setOpenFollowings} />

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
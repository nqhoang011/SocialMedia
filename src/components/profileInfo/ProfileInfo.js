import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar, Box, Button, Modal } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, Close, GridOnOutlined, SaveAltOutlined, VideoLibrary } from "@mui/icons-material";
import ListFollowing from "./ListFollowing";
import ListFollowers from "./ListFollowers";
import { getCountFollowersApi, getCountFollowingsApi, getListPosts, getListPostsApi, getUserStoriesApi } from "../../utils/api";
import { toast } from "react-toastify";
import { DatePicker, Radio } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import ViewPost from "./viewpost/ViewPost";
import ViewStory from "./viewStory/ViewStory";
dayjs.extend(customParseFormat);

const ImageDisplay = ({ data }) => {
    // console.log(data.post.images[0].image);
    const [viewPost, setViewPost] = useState(false);
    const updateViewPost = (close) => {
        setViewPost(close);
    }
    return (
        <>
            <img src={data.post.images[0].image} className={styles.postImage}
                onClick={() => setViewPost(true)} />
            {viewPost && <ViewPost viewPost={viewPost} onClose={updateViewPost} postData={data} />}
        </>
    )
}

const EditForm = ({ open, setOpen }) => {
    const [genderValue, setGenderValue] = useState(localStorage.getItem('gender'));
    const onChange = (e) => {
        // console.log('radio checked', e.target.value);
        setGenderValue(e.target.value);
    };

    const dateFormat = 'YYYY-MM-DD';

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
                        value={localStorage.getItem('email')}
                        placeholder="Enter Your Email Address"
                        required />
                    <input
                        className={styles.formInput}
                        type="text"
                        value={localStorage.getItem('title')}
                        placeholder="Enter Your Name"
                        required />
                    <input
                        className={styles.formInput}
                        type="text"
                        value={localStorage.getItem('name')}
                        placeholder="Enter Username"
                        required />
                    <div className={styles.gender}>
                        <h3>Gender</h3>
                        <Radio.Group size="large"
                            onChange={onChange}
                            value={genderValue === true ? true : false}
                        >
                            <Radio value={true}>Male</Radio>
                            <Radio value={false}>Female</Radio>
                        </Radio.Group>
                    </div>
                    <div className={styles.dob}>
                        <h3 style={{ marginRight: "15px" }}>Date of birth: </h3>
                        {/* <DatePicker
                            defaultValue={dayjs(localStorage.getItem('dob'), dateFormat)}
                            minDate={dayjs('1919-08-01', dateFormat)}
                            maxDate={dayjs('2020-10-31', dateFormat)}
                        /> */}
                        <input type='text'
                            value={localStorage.getItem('dob')} />
                    </div>
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

const ListPosts = ({ listImgs }) => {
    return (
        <div className={styles.userPosts}>
            {listImgs.map((item) => (
                <ImageDisplay key={item.post.images[0].id} data={item} />
            ))}
        </div>
    )
}

const ListReels = () => {
    return (
        <div className={styles.userPosts}>
            {/* <ImageDisplay />
            <ImageDisplay />
            <ImageDisplay />
            <ImageDisplay />
            <ImageDisplay />
            <ImageDisplay /> */}
        </div>
    )
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
    const [showPosts, setShowPosts] = useState(true);
    const [listImages, setListImages] = useState([]);
    const [openStory, setOpenStory] = useState(false);
    const [listStories, setListStories] = useState([]);
    const getData = async () => {
        try {
            let res = await getCountFollowersApi();
            setCntFollowers(res.data.length);
            res = await getCountFollowingsApi();
            setCntFollowings(res.data.length);
            res = await getListPostsApi();
            setListImages(res.data);
            res = await getUserStoriesApi();
            // console.log(res.data);
            setListStories(res.data);
        }
        catch (error) {
            toast.error('Lỗi: ' + error.messase);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const ListStories = () => {
        const [listData, setListData] = useState(listStories.map((item) => item.src_image));
        const handleCloseStory = (close) => {
            setOpenStory(close);
        }
        return (
            <div className={styles.story}>
                <img
                    className={styles.avatarProfilePicIcon1}
                    alt=""
                    src={bg1}
                    onClick={() => setOpenStory(true)}
                />
                <div className={styles.avatarName}>
                    <div className={styles.madeUsWrapper}>
                        <div className={styles.madeUs}>Srory</div>
                    </div>
                </div>
                <ViewStory isOpen={openStory} data={listData} onCloseStory={handleCloseStory} />
            </div>
        )
    }

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
                            <div className={styles.viewer}>{listImages.length} </div>
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
                <ListStories />
            </div>
            <div className={styles.toogle}>
                <div className={styles.toogle1}>
                    <button className={styles.buttonPosts}
                        onClick={() => setShowPosts(true)}>
                        <div className={styles.buttonIcon}>
                            <GridOnOutlined />
                        </div>
                        <div className={styles.buttonTitle}>
                            <b className={styles.posts3}>POSTS</b>
                        </div>
                    </button>
                    <button className={styles.buttonReels}
                        onClick={() => setShowPosts(false)}>
                        <div className={styles.buttonIcon}>
                            <VideoLibrary />
                        </div>
                        <div className={styles.buttonTitle}>
                            <div className={styles.posts4}>REELS</div>
                        </div>
                    </button>
                </div>
            </div>
            {showPosts === true && <ListPosts
                listImgs={listImages} />}
            {showPosts === false && <ListReels />}
        </div>
    );
};
export default ProfileInfo;
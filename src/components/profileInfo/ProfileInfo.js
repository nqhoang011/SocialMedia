import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Avatar, Box, Button, Modal } from "@mui/material";
import bg1 from "../../img/bg1.jpg";
import { AddCircle, Close, GridOnOutlined, SaveAltOutlined, VideoLibrary } from "@mui/icons-material";
import ListFollowing from "./ListFollowing";
import ListFollowers from "./ListFollowers";
import { UpdateProfileApi, getCountFollowersApi, getCountFollowingsApi, getFollowersApi, getListPosts, getListPostsApi, getUserProfileApi, getUserStoriesApi } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker, Radio } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import ViewPost from "./viewpost/ViewPost";
import ViewStory from "./viewStory/ViewStory";
import 'react-toastify/dist/ReactToastify.css';
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
                onClick={() => {
                    setViewPost(true)
                    // console.log(viewPost)
                }} />
            {viewPost === true && <ViewPost key={data.post.id} viewPost={viewPost} onClose={updateViewPost} postData={data} />}
        </>
    )
}

const EditForm = ({ open, setOpen }) => {
    const [genderValue, setGenderValue] = useState(localStorage.getItem('gender'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [dob, setDob] = useState(localStorage.getItem('dob'));
    const [title, setTitle] = useState(localStorage.getItem('title'));
    const [name, setName] = useState(localStorage.getItem('name'));
    // console.log(localStorage.getItem('gender'));
    const handleOnChange = (e) => {
        // console.log('radio checked', e.target.value);
        setGenderValue(e.target.value);
    };
    // const dateFormat = 'YYYY-MM-DD';
    useEffect(() => {
        // console.log(true);
        setGenderValue(localStorage.getItem('gender'));
        setEmail(localStorage.getItem('email'));
        setGenderValue(localStorage.getItem('gender'));
        setDob(localStorage.getItem('dob'));
        setTitle(localStorage.getItem('title'));
    }, []);

    const onSaveChange = async () => {
        let gen = genderValue === 'true' ? true : false;
        try {
            let res = await UpdateProfileApi(name, email, title, gen, dob, localStorage.getItem('image'));
            if (res.status === 200) {
                toast.success('Update profile successfully!');
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('title', title);
                localStorage.setItem('gender', genderValue);
                localStorage.setItem('dob', dob);
                setOpen(false);
            }

        } catch (error) {
            toast.error('Update profile error:', error);
        }
    }
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
                <div className={styles.editForm}>
                    <h3>Email:</h3>
                    <input
                        className={styles.formInput}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Address"
                        required />
                    <h3>Your title:</h3>
                    <input
                        className={styles.formInput}
                        type="text"
                        value={title}
                        placeholder="Enter Your Name"
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                    <h3>Your Name:</h3>
                    <input
                        className={styles.formInput}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Username"
                        required />
                    <div className={styles.gender}>
                        <h3>Gender</h3>
                        <Radio.Group size="large"
                            onChange={handleOnChange}
                            value={genderValue}
                        // defaultValue={genderValue}
                        >
                            <Radio value={'true'}>Male</Radio>
                            <Radio value={'false'}>Female</Radio>
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
                            value={dob}
                            onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <div className={styles.btnSave}>
                        <Button variant="contained"
                            // type="submit"
                            onClick={onSaveChange}>Save</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

const ShowFollowers = ({ openFollowers, setOpenFollowers, dataId }) => {
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
                    <ListFollowers dataId={dataId} />
                    <div className={styles.btnSave}>
                        <Button variant="contained"
                            onClick={() => setOpenFollowers(false)}>Close</Button>
                    </div>
                </div>
            </div>
        </Modal >
    );
}


const ShowFollowings = ({ openFollowings, setOpenFollowings, dataId }) => {
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
                    <ListFollowing dataId={dataId} />
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

const ProfileInfo = ({ dataId }) => {
    // console.log(dataId);
    const [open, setOpen] = useState(false);
    const [openFollowers, setOpenFollowers] = useState(false);
    const [openFollowings, setOpenFollowings] = useState(false);
    const image = localStorage.getItem('image');
    let name = localStorage.getItem('name');
    let title = localStorage.getItem('title');
    const [cntFollowers, setCntFollowers] = useState(0);
    const [cntFollowings, setCntFollowings] = useState(0);
    const [showPosts, setShowPosts] = useState(true);
    const [listImages, setListImages] = useState([]);
    const [openStory, setOpenStory] = useState(false);
    const [listStories, setListStories] = useState([]);
    const [info, setInfo] = useState(null);
    const [followed, setFollowed] = useState(false);
    const getData = async () => {
        try {
            let res = await getCountFollowersApi(dataId);
            setCntFollowers(res.data.length);
            res = await getCountFollowingsApi(dataId);
            setCntFollowings(res.data.length);
            res = await getListPostsApi(dataId);
            // console.log(res.data);
            setListImages(res.data);
            res = await getUserStoriesApi(dataId);
            setListStories(res.data);
            res = await getUserProfileApi(dataId);
            setInfo(res.data);
            // console.log(res.data);
            res = await getFollowersApi(dataId);
            let check = res.data.find((item) => item.id === localStorage.getItem('id'));
            if (check === undefined) {
                setFollowed(false);
            }
            else {
                setFollowed(true);
            }
        }
        catch (error) {
            toast.error('Lỗi: ' + error.messase);
        }
    }
    useEffect(() => {
        getData();
        name = localStorage.getItem('name');
        title = localStorage.getItem('title');
    }, []);

    const ListStories = () => {
        const [listData, setListData] = useState(listStories.map((item) => item.src_image));
        const handleCloseStory = (close) => {
            setOpenStory(close);
        }
        return (
            listStories.length > 0 &&
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
            <ToastContainer autoClose={2000}></ToastContainer>
            <div className={styles.header}>
                <div className={styles.profilePic}>
                    <Avatar src={info === null ? image : info.image}
                        sx={{
                            width: "150px",
                            height: "150px"
                        }} />
                </div>
                <div className={styles.desc}>
                    <div className={styles.account}>
                        <div className={styles.nickName}>{info === null ? name : info.name}</div>
                        {dataId === localStorage.getItem('id') ?
                            <button
                                className={styles.editProfile}
                                onClick={() => setOpen(true)}
                            >Edit Profile</button>
                            :
                            followed === false ?
                                <button
                                    className={styles.editProfile}
                                // onClick={() => setOpen(true)}
                                >Follow</button>
                                :
                                <button
                                    className={styles.editProfile}
                                // onClick={() => setOpen(true)}
                                >Unfollow</button>
                        }
                        {dataId === localStorage.getItem('id') && <EditForm
                            open={open}
                            setOpen={setOpen}
                        />}
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
                            setOpenFollowers={setOpenFollowers}
                            dataId={dataId} />
                        <a className={styles.count}
                            onClick={() => {
                                setOpenFollowings(true);
                            }}>
                            <div className={styles.viewer}>{cntFollowings} </div>
                            <div className={styles.posts}>following</div>
                        </a>
                        <ShowFollowings openFollowings={openFollowings}
                            setOpenFollowings={setOpenFollowings}
                            dataId={dataId} />

                    </div>
                    <div className={styles.profileName1}>
                        <div className={styles.viewer}>{info === null ? title : info.title}</div>
                    </div>
                </div>
            </div>
            <div className={styles.storys}>
                {dataId === localStorage.getItem('id') &&
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
                }
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
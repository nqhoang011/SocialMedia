import React, { useEffect, useRef, useState } from 'react';
import '../createPost/CreatePost.css';
import { CloseRounded, PhotoLibraryOutlined, PlayCircleFilledOutlined, SentimentSatisfiedOutlined } from '@mui/icons-material';
import { Button, Modal, Upload } from 'antd';
import { imageDb } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import { createPostApi, createVideoApi } from '../../utils/api';
import 'react-toastify/dist/ReactToastify.css';
import { PlusOutlined } from '@ant-design/icons';

export function formatDateTime() {
    var date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const CreatePost = () => {
    const [open, setOpen] = useState(false);
    const [openUpload, setOpenUpload] = useState(false);
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);
    const [content, setContent] = useState("");
    let arr = [];
    const dataVideo = useRef();
    const handleClose = () => {
        // console.log(video);
        setOpen(false);
    }
    const handleCancel = () => {
        setVideo(null);
        setOpen(false);
        dataVideo.current.value = null;
    }
    const handleCloseUpload = () => {
        if (images.length > 0) {
            toast.success("Upload images succeed!");
        }
        setOpenUpload(false);
    }
    const handleCancelUpload = () => {
        setImages([]);
        setOpenUpload(false);
    }
    const postData = async () => {
        try {
            let res = createPostApi(
                localStorage.getItem('id'),
                content,
                arr,
                'Public',
                'POST',
                formatDateTime(),
                null,
                null
            );
            // console.log(res);
            if (res !== null) {
                toast.success('Succeed!');
            }
        } catch (error) {
            toast.error('Error: ' + error);
        }
    }
    const postDataVideo = async (url) => {
        // console.log(url);
        try {
            let res = createVideoApi(
                localStorage.getItem('id'),
                content,
                null,
                'Public',
                url,
                'SHORTCUT',
                formatDateTime(),
                null,
                null
            );
            // console.log(res);
            if (res !== null) {
                toast.success('Succeed!');
            }
        } catch (error) {
            toast.error('Error: ' + error);
        }
    }
    const handleSubmit = async (e) => {
        // const arr = [];
        // e.preventDefault();
        // for (const image of images) {
        //     const storageRef = ref(imageDb, `images/${image.name}`);
        //     await uploadBytes(storageRef, image).then(() => {
        //         getDownloadURL(storageRef).then((url) => {
        //             // Lưu trữ URL ở đây
        //             // console.log(url);
        //             const newObj = {
        //                 image: url,
        //                 userid: localStorage.getItem('id')
        //             };
        //             arr = [...arr, newObj];
        //             // setUrls(newArr);
        //             // console.log(arr);
        //         });
        //     });
        // }
        if (images.length > 0) {
            // e.preventDefault();
            for (const image of images) {
                const storageRef = ref(imageDb, `images/${image.name}`);
                const url = await uploadBytes(storageRef, image).then(() => getDownloadURL(storageRef));
                toast.success('Upload image to firebase complete');
                arr.push({ image: url, userid: localStorage.getItem('id') });
            }
            console.log(arr);
            postData();
        }
        else if (video !== null) {
            e.preventDefault();
            const storageRef = ref(imageDb, `videos/${video.name}`);
            const url = await uploadBytes(storageRef, video).then(() => getDownloadURL(storageRef));
            toast.success('Upload video to firebase storage succeed! Url:' + url);
            postDataVideo(url);
            setContent("");
            setVideo(null);
        }
        else {
            toast.error('Your post must contain at least 1 image or 1 video!');
            e.preventDefault();
        }
    }

    const handleChange = (event) => {
        // console.log(event.file.originFileObj);
        const newImages = event.fileList.map((file) => file.originFileObj);
        setImages([...newImages]);
        // console.log(images);
    };
    return (
        <div className='form-border'>
            <ToastContainer autoClose={2000}></ToastContainer>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input
                        value={content}
                        type='text'
                        id='i-input'
                        placeholder="What's in your mind?"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className='file-upload'>
                    <div className='file-icons'>
                        <label htmlFor='file'
                            className='pv-upload'
                            onClick={() => setOpenUpload(true)}
                        >
                            <PhotoLibraryOutlined className='input-svg' />
                            <span className='photo-dis'>Photo</span>
                        </label>
                        <Modal open={openUpload}
                            title='Upload image'
                            onOk={handleCloseUpload}
                            onCancel={handleCancelUpload}
                        >
                            <Upload
                                action="https://firebasestorage.googleapis.com/v0/b/znet-6536d.appspot.com/o"
                                listType="picture-card"
                                defaultFileList={[...images]}
                                // className='upload-list-inline'
                                onChange={handleChange}
                                multiple
                            // beforeUpload={(file) => {
                            //     // console.log({ file });
                            //     return true;
                            // }}
                            >
                                <PlusOutlined />
                            </Upload>
                        </Modal>
                        <label className='pv-upload2'
                            onClick={() => setOpen(true)}>
                            <PlayCircleFilledOutlined className='input-svg' />
                            <span className='photo-dis'>Video</span>
                            {/* <input type="file" accept="video/*" /> */}
                        </label>
                        <Modal
                            title="Upload video"
                            open={open}
                            onCancel={handleCancel}
                            onOk={handleClose}
                        >
                            <input type="file"
                                accept="video/*"
                                ref={dataVideo}
                                onChange={(e) => {
                                    const vid = e.target.files[0];
                                    if (vid.size > 10 * 1024 * 1024) {
                                        toast.error('Cannot upload video with size > 10MB');
                                        return;
                                    }
                                    setVideo(e.target.files[0]);
                                    toast.success("Upload video succeed!");
                                }} />
                        </Modal>

                        <div className='pv-upload3'>
                            <SentimentSatisfiedOutlined className='input-svg' />
                            <span className='photo-dis'>Feeings/Activity</span>
                        </div>
                    </div>
                    <button type='submit'><span>Share</span></button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
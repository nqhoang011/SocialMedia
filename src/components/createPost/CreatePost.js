import React from 'react';
import '../createPost/CreatePost.css';
import { CloseRounded, EmojiEmotionsOutlined, Face, Face2, Face3, Face4, Face5, Face6, KeyboardVoiceOutlined, PhotoLibraryOutlined, PlayCircleFilled, PlayCircleFilledOutlined, PlayCircleOutline, VoiceChatOutlined } from '@mui/icons-material';

const CreatePost = ({ images, setImages }) => {
    return (
        <div className='form-border'>
            <form>
                <div className='input-box'>
                    <img className='i-img' />
                    <input
                        type='text'
                        id='i-input'
                        placeholder="What's in your mind?"
                        required />
                </div>
                <div className='file-upload'>
                    <div className='file-icons'>
                        <label htmlFor='file' className='pv-upload'>
                            <PhotoLibraryOutlined className='input-svg' />
                            <span className='photo-dis'>Photo</span>
                        </label>
                        <div className='pv-upload'>
                            <PlayCircleFilledOutlined className='input-svg' />
                            <span className='photo-dis'>Video</span>
                        </div>
                        <div className='pv-upload'>
                            <KeyboardVoiceOutlined className='input-svg' />
                            <span className='photo-dis'>Audio</span>
                        </div>
                        <div className='pv-upload'>
                            <EmojiEmotionsOutlined className='input-svg' />
                            <span className='photo-dis'>Feeings/Activity</span>
                        </div>
                    </div>
                    <button type='submit'><span>Share</span></button>
                </div>
                <div style={{ display: "none" }}>
                    <input type='file'
                        id='file'
                        accept=".png,.jpeg,.jpg"
                    // onChange={}
                    />
                </div>
                {images && (
                    <div className="displayImg">
                        <CloseRounded onClick={() => setImages(null)} />
                        <img src={URL.createObjectURL(images)} alt="" />
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreatePost;
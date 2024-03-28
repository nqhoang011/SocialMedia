import React, { useEffect, useRef, useState } from "react";
import styles from '../Reels/Reels.module.css';
import Video from '../../img/short-video.mp4';
import { FavoriteBorder, ChatBubbleOutline, Send, VolumeOff, VolumeUp } from '@mui/icons-material';
import { ControlBar, Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css"
import { getListReelsApi } from "../../utils/api";
import { toast } from "react-toastify";
import { Button } from "antd";
const Reels = ({ data }) => {
    const muteRef = useRef();
    const [muted, setMuted] = useState(true);
    const handleControlMuted = () => {
        muteRef.current.muted = !muteRef.current.muted;
        setMuted(!muted);
    }
    useEffect(() => {
        setMuted(muteRef.current.muted);
    }, [muted]);
    // console.log(data.post.src)
    return (
        <div className={styles.reelsContainer}>
            <div className={styles.reels}>
                {/* <div > */}
                <Player
                    autoPlay={true}
                    loop
                    muted={true}
                    ref={muteRef}
                    // onVolumnChange={handleControlMuted}
                    // onMute={handleControlMuted}
                    // onUnmute={handleControlMuted}
                    className={styles.videoContent}
                >
                    <ControlBar disableCompletely />
                    <source src={data.post.src} />
                </Player>
                {/* </div> */}
                <div className={styles.postContent}>
                    <div className={styles.nameBar}>
                        <img className={styles.avatarIcon} alt="" src={data.user.image} />
                        <b className={styles.pageName}>{data.user.name}</b>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.loremIpsumDolorContainer}>
                            <span>{data.post.content}</span>
                            {/* <span className={styles.more}>more</span> */}
                        </div>
                    </div>
                </div>
                <div style={{ position: "absolute", right: -50, top: 400 }}>
                    <div className={styles.icon}>
                        <div className={styles.iconHeart}>
                            <FavoriteBorder className={styles.heartIcon} />
                            <div className={styles.div}>{data.favorites.length}</div>
                        </div>
                        {/* <div className={styles.iconComment}>
                            <ChatBubbleOutline className={styles.commentIcon} />
                            <div className={styles.div}>{ }</div>
                        </div> */}
                        <div className={styles.iconShare}>
                            <Send className={styles.heartIcon} />
                        </div>
                        <Button icon={muted === true ? <VolumeOff /> : <VolumeUp />}
                            onClick={handleControlMuted}
                            style={{
                                color: "white",
                                background: "white",
                                backgroundColor: "transparent",
                                border: "none"
                            }}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reels;
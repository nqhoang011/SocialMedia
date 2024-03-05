import React from "react";
import styles from '../Reels/Reels.module.css';
import Video from '../../img/bg1.jpg';
import { FavoriteBorder, ChatBubbleOutline, Send } from '@mui/icons-material';
const Reels = () => {
    return (
        <div className={styles.reels}>
            <img
                className={styles.storypictureIcon}
                alt=""
                src={Video}
            />
            <div className={styles.postContent}>
                <div className={styles.nameBar}>
                    <img className={styles.avatarIcon} alt="" src={Video} />
                    <b className={styles.pageName}>Page name</b>
                </div>
                <div className={styles.description}>
                    <div className={styles.loremIpsumDolorContainer}>
                        <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor numbas sator... `}</span>
                        <span className={styles.more}>more</span>
                    </div>
                </div>
                <div className={styles.audioBar}>
                    <img className={styles.icon} alt="" src="/.svg" />
                    <div className={styles.pageName}>Page name · Original Audio</div>
                </div>
            </div>
            <div className={styles.icon}>
                <div className={styles.iconHeart}>
                    <FavoriteBorder className={styles.heartIcon} />
                    <div className={styles.div}>234</div>
                </div>
                <div className={styles.iconComment}>
                    <ChatBubbleOutline className={styles.commentIcon} />
                    <div className={styles.div}>45</div>
                </div>
                <div className={styles.iconShare}>
                    <Send className={styles.heartIcon} />
                </div>
                <img className={styles.iconAudio} alt="" src={Video} />
                <div className={styles.actionIconsBottom} />
            </div>
        </div>
    );
};

export default Reels;
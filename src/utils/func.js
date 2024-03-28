import { toast } from "react-toastify";
import { dislikePostApi, followApi, likePostApi, unfollowApi } from "./api"

export const HandleFollowUser = async (userId) => {
    try {
        let res = await followApi(userId);
        if (res !== null) {
            toast.success('Succeed!');
            return true;
        }
    } catch (error) {
        toast.error('Follow user fail:', error);
        return false;
    }
    return false;
}

export const HandleUnfollowUser = async (userId) => {
    try {
        let res = await unfollowApi(userId);
        if (res === undefined) {
            toast.success('Succeed!');
            return true;
        }
    } catch (error) {
        toast.error('Unfollow user fail:', error);
        return false;
    }
    return false;
}

export const handleLikePost = async (id) => {
    try {
        let res = await likePostApi(localStorage.getItem('id'), id);
        if (res !== null) {
            return true;
        }
    } catch (error) {
        toast.error("Like post fail: " + error);
        return false;
    }
    return false;
}

export const handleDislikePost = async (id) => {
    try {
        let res = await dislikePostApi(localStorage.getItem('id'), id);
        // console.log(data.post.id, localStorage.getItem('id'));
        if (res === undefined) {
            return true;
        }
    } catch (error) {
        toast.error("Dislike post fail: " + error);
        return false;
    }
    return false;
}
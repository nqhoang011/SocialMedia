import { SentimentDissatisfied } from '@mui/icons-material';
import React from 'react';

const Post = ({ post, posts, setPosts, setFriendsProfile, images }) => {
    const [comments, setComments] = useState([
        {
            id: 1,
            profilePic: img1,
            likes: 23,
            username: "Violet",
            time: "3 Hours Ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores debitis saepe itaque, eligendi quasi laboriosam vitae voluptatem animi maiores voluptatibus."
        },
        {
            id: 2,
            profilePic: img2,
            likes: 5,
            username: "Brandon",
            time: "1 Hour Ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 3,
            profilePic: img3,
            likes: 50,
            username: "Lilly",
            time: "30 Mins Ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores debitis saepe itaque, eligendi quasi"
        }
    ])
    const [like, setLike] = useState(post.like)
    const [unlike, setUnlike] = useState(false)

    const [filledLike, setFilledLike] = useState(<FavoriteBorderOutlinedIcon />)
    const [unFilledLike, setUnFilledLike] = useState(false)

    const handlelikes = () => {
        setLike(unlike ? like - 1 : like + 1)
        setUnlike(!unlike)

        setFilledLike(unFilledLike ? <FavoriteBorderOutlinedIcon /> : <FavoriteRoundedIcon />)
        setUnFilledLike(!unFilledLike)
    }
    const [showDelete, setShowDelete] = useState(false)
    const [showComment, setShowComment] = useState(false)

    const handleDelete = (id) => {
        const deleteFilter = posts.filter(val => val.id !== id)
        setPosts(deleteFilter)
        setShowDelete(false)
    }

    const [commentInput, setCommentInput] = useState("")

    const handleCommentInput = (e) => {
        e.preventDefault()

        const id = comments.length ? comments[comments.length - 1].id + 1 : 1
        const profilePic = Profile
        const username = "Vijay"
        const comment = commentInput
        const time = moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()

        const commentObj = {
            id: id,
            profilePic: profilePic,
            likes: 0,
            username: username,
            comment: comment,
            time: time
        }
        const insert = [...comments, commentObj]
        setComments(insert)
        setCommentInput("")
    }

    const handleFriendsId = (id) => {
        const friendsIdFilter = posts.filter(val => val.id === id)
        setFriendsProfile(friendsIdFilter)
    }

    const [socialIcons, setSocialIcons] = useState(false)
    return (
        <div className='post'>
            <div className='post-header'>
                <Link to="/friendId" style={{ textDecoration: "none" }}>
                    <div className='post-user' onClick={() => handleFriendsId(post.id)} style={{ cursor: "pointer" }}>
                        <img src={post.profilepicture} className='p-img' alt="" />
                        <h2>{post.username}</h2>
                        <p className='datePara'>{post.datetime}</p>
                    </div>
                </Link>
                <div className='delete'>
                    {showDelete && (
                        <div className='option'>
                            <button><SentimentDissatisfied /></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Post;
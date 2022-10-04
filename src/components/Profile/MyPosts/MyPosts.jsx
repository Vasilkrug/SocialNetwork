import React, {useState} from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";


const MyPosts = (props) => {
const [isLike,setIsLike] = useState(false);

const likeHandler = () => {
setIsLike(!isLike)
}
    return (
        <div>
            <PostForm/>
            <Post changeLike={likeHandler} like={isLike} message='Привет, как дела?'/>
        </div>
    );
}

export default MyPosts;
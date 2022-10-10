import React, {useState} from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import TextArea from "../../UI/TextArea/TextArea";

const MyPosts = (props) => {
    const [isLike, setIsLike] = useState(false);

    const likeHandler = () => {
        setIsLike(!isLike)
    }
    return (
        <div>
            <TextArea placeholder={'Напишите что нибудь'}/>
            <Post changeLike={likeHandler} like={isLike} message='Привет, как дела?'/>
        </div>
    );
}

export default MyPosts;
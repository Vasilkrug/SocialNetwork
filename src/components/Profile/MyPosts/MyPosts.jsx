import React, {useState} from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";


const MyPosts = (props) => {

    return (
        <div>
            <PostForm/>
            <Post message='Привет'/>
        </div>
    );
}

export default MyPosts;
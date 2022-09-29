import React, {useState} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";


const MyPosts = (props) => {

    return (
        <div>
            <PostForm/>
            <Post message='Hello'/>
        </div>
    );
}

export default MyPosts;
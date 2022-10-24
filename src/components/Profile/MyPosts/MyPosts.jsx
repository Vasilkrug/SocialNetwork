import React, {useState} from 'react';
import Post from "./Post/Post";
import TextArea from "../../UI/TextArea/TextArea";
import styles from './MyPosts.module.scss'
import {useDispatch, useSelector} from "react-redux";
import EmptyPost from "./EmptyPost/EmptyPost";

const MyPosts = (props) => {
    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    const addPost = (e) => {
        const successAdding = () => {
            e.preventDefault()
            dispatch({type:'ADD_POST',payload:inputValue})
            setInputValue('')
        }
        e.key === 'Enter' ? successAdding() : '';
    }
    const deletePost = (id) => {
        dispatch({type:'DELETE_POST',payload:id})
    }

    const inputHandler = (e) => {
     setInputValue(e.target.value)
    }

    return (
        <div className={styles.my_posts}>
            <TextArea
                onKeyDown={(event) => addPost(event)}
                onChange={(event) => inputHandler(event)}
                value={inputValue}
                placeholder='Напишите что нибудь'/>
            {posts.length ? posts.map(post =>
                <Post
                    deletePost={deletePost}
                    key={post.id} id={post.id}
                    message={post.message}/>)
                :
            <EmptyPost/>}
        </div>
    );
}

export default MyPosts;
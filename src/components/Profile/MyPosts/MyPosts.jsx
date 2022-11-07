import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post/Post";
import TextArea from "../../UI/TextArea/TextArea";
import EmptyPost from "./EmptyPost/EmptyPost";
import {addPostAction, deletePostAction} from "../../../store/actions";
import styles from "./MyPosts.module.scss";
import {ADD_POST} from "../../../store/actionsTypes";

const MyPosts = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    const addPost = (e) => {
        const successAdding = () => {
            e.preventDefault()
            dispatch(addPostAction(e.target.value))
            e.target.value = ""
        }
        e.key === "Enter" ? successAdding() : "";
    }

    const deletePost = (id) => dispatch(deletePostAction(id));

    return (
        <div className={styles.my_posts}>
            <TextArea
                onKeyDown={(event) => addPost(event)}
                placeholder='Напишите что нибудь'/>
            {posts.length ? posts.map(post =>
                    <Post
                        deletePost={deletePost}
                        key={post.id} id={post.id}
                        message={post.message}
                    />)
                :
                <EmptyPost/>}
        </div>
    );
}

export default MyPosts;
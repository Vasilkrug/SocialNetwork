import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incrementAction, decrementAction, toggleLikeAction} from "../../../../store/actions/PostActions";
import styles from "./LikesCounter.module.scss";

const LikesCounter = () => {
    const dispatch = useDispatch()
    const isLike = useSelector(state => state.posts.isLike)
    const likeCount = useSelector(state => state.posts.postsLikeCounter)

    const likeHandler = () => {
        dispatch(toggleLikeAction())
        isLike ? dispatch(decrementAction()) : dispatch(incrementAction())
    };
    return (
        <div className={styles.like}>
            <img
                onClick={likeHandler}
                alt="like"
                src={isLike ? "/images/icons/red-heart.png" : "/images/icons/heart.png"}/>
            <p>&nbsp;{likeCount < 1 ? '' : likeCount}</p>
        </div>
    );
};

export default LikesCounter;
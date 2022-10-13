import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import styles from "./LikesCounter.module.scss";

const LikesCounter = () => {
    const [isLike, setIsLike] = useState(false);
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);

    const decrement = () => setCounter(counter - 1);

    const likeHandler = () => {
        setIsLike(!isLike)
        isLike ? decrement() : increment()
    };
    return (
        <div className={styles.like}>
            <img
                onClick={likeHandler}
                alt="like"
                src={isLike ? "/images/icons/red-heart.png" : "/images/icons/heart.png"}/>
            <CSSTransition in={isLike} timeout={300} classNames="my-node" unmountOnExit>
                <p>&nbsp;{counter}</p>
            </CSSTransition>

        </div>
    );
};

export default LikesCounter;
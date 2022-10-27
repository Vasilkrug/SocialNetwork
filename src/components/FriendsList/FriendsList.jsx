import React from "react";
import FriendsListItem from "./FriendsListItem/FriendsListItem";
import styles from "./FriendsList.module.scss";

const FriendsList = () => {
    return (
        <div className={styles.friends_list}>
            <div className={styles.friends_list_header}>
                <span>Все друзья 0</span>
            </div>
            <ul className={styles.friends_list_body}>
                <FriendsListItem/>
            </ul>
        </div>
    );
};

export default FriendsList;
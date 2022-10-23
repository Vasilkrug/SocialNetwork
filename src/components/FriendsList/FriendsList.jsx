import React from 'react';
import styles from './FriendsList.module.scss'
import SearchForm from "../UI/SearchForm/SearchForm";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsList = () => {
    return (
        <div className={styles.friends_list}>
            <div className={styles.friends_list_header}>
                <span>Все друзья 0</span>
            </div>
            <SearchForm placeholder={'Поиск друзей'}/>
            <hr/>
            <ul className={styles.friends_list_body}>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
            </ul>
        </div>
    );
};

export default FriendsList;
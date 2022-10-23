import React from 'react';
import styles from "./FriendsListItem.module.scss";

const FriendsListItem = () => {
    return (
        <li className={styles.friends_list_item}>
            <div>
                <img src="/images/animal.jpeg" alt="#"/>
            </div>
            <div className={styles.friends_list_item_desc}>
                <p>Владимир Путин</p>
                <span>Написать сообщение</span>
            </div>
        </li>
    );
};

export default FriendsListItem;
import React from 'react';
import styles from "./FriendsListItem.module.scss";

const FriendsListItem = () => {
    return (
        <li className={styles.friends_list_item}>
            <div>
                <img src="/images/animal.jpeg" alt="#"/>
            </div>
            <div className={styles.friends_list_item_desc}>
                <div className={styles.body}>
                    <a>Владимир Путин</a>
                </div>
                <div className={styles.buttons}>
                    <span>Написать сообщение</span>
                    <span>Удалить из друзей</span>
                </div>
            </div>
        </li>
    );
};

export default FriendsListItem;
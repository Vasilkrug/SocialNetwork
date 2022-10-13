import React, {useState} from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import TextArea from "../../UI/TextArea/TextArea";

const MyPosts = (props) => {
    const [inputValue,setInputValue] = useState('');
    const [posts,setPosts] = useState([])


    const addPost = (e) => {
        const successAdding = () => {
            e.preventDefault()
            setPosts([{message:inputValue},...posts])
            setInputValue('')
        }
        e.key === 'Enter' ? successAdding()  : ''

    }
    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <TextArea
                onKeyDown={(event) => addPost(event)}
                onChange={(event) => inputHandler(event)}
                value={inputValue}
                placeholder='Напишите что нибудь'/>
            {posts.map(post => <Post message={post.message}/>)}
        </div>
    );
}

export default MyPosts;
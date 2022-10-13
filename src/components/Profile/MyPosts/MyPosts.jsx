import React, {useState} from 'react';
import Post from "./Post/Post";
import TextArea from "../../UI/TextArea/TextArea";
import styles from './MyPosts.module.scss'

const MyPosts = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState([])


    const addPost = (e) => {
        const successAdding = () => {
            e.preventDefault()
            setPosts([{message: inputValue, id: Date.now()}, ...posts])
            setInputValue('')
        }
        e.key === 'Enter' ? successAdding() : '';
    }
    const deletePost = (id) => {
        const filteredArray = posts.filter(post => post.id !== id)
        setPosts(filteredArray)
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
            {posts.map(post => <Post deletePost={deletePost} key={post.id} id={post.id} message={post.message}/>)}
        </div>
    );
}

export default MyPosts;
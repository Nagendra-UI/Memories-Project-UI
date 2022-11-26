import React from 'react'
import Post from './Post/Post';
import useStyle from './styles.js';

const Posts = () => {
    const classes = useStyle();

    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>
    )
}

export default Posts
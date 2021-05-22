import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return(
        <div>
            <div>
                My posts
            </div>

            <div>
                <textarea ref={newPostElement}> </textarea>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {props.state}
            </div>
        </div>
    )
}

export default MyPosts;
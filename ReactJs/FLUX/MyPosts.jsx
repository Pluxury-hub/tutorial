import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} like={p.like} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                My posts
            </div>

            <div>
                {/* onChange - при изменении */}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
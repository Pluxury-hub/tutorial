import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    //createRef - создать ссылку
    let newPostElement = React.createRef();

    let addPost = () => {
        //current - ссылается на нативный HTML документ
        // value - то что в текстовом поле
        let text = newPostElement.current.value;
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
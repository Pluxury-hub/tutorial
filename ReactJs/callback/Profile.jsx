import s from './Profile.module.css';
import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {

    let postsElements = props.state.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>);

    return (
        <div>

            <ProfileInfo/>

            <MyPosts
                state={postsElements}
                addPost={props.addPost}/>

        </div>)
}

export default Profile;
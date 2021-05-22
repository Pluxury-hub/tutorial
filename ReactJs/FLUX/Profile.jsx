import s from './Profile.module.css';
import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return (
        <div>

            <ProfileInfo />

            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} />

        </div>)
}

export default Profile;
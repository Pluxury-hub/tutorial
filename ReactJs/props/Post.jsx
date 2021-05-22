
import React from 'react';
import s from './Post.module.css';

// пишем props
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://3dnews.ru/assets/external/illustrations/2020/01/10/1001163/01.jpg' />
      // вызываем props
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>);
}

export default Post;
import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', like: '15' },
            { id: 2, message: "It's my first post", like: '16' },
            { id: 3, message: "Wow", like: '123' },
        ],
        newPostText: 'add me',
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' },
        ],

        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
        ],
    }
}

// добавляем новый пост и очищаем поле после
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

// создаём функцию которая будет побуквенно изменять данные в массиве
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state
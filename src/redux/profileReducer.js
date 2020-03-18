const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case ADD_POST:
            let newPost = {
                id: 5,
                likesCount: 0,
                text: state.newPostText,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
    }
}
export default profileReducer

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})
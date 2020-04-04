const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initialState = {
    newPostText: '',
    profile: {
        fullName: "init name",
        aboutMe: "init",
        contacts: {
        },
        lookingForAJob: true,
        lookingForAJobDescription: "none",
        userId: 2,
        photos: {
        }
    },
    posts: [
        {
            id: 1,
            likesCount: 12,
            text: 'Совершенно Не следует, однако, забывать, что повышение уровня гражданского сознания позволяет выполнять важные задания по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
        },
        {
            id: 2,
            likesCount: 43,
            text: 'Не следует, однако, забыв по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
        },
        {
            id: 3,
            likesCount: 12,
            text: 'Не следует, однако, забыповышение уровня гражданского сознания позволяет выполнять важные задания по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
        },
        {
            id: 4,
            likesCount: 53,
            text: 'Не следует, однако, забывать, что повышение уровнии, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
        },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case ADD_POST: {
            let newPost = {
                id: 5,
                likesCount: 0,
                text: state.newPostText,
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.text
            return stateCopy
        }

        case SET_USER_PROFILE: {
            let stateCopy = {
                ...state,
                profile: action.profile
            }
            return stateCopy
        }
    }
}

export default profileReducer

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})
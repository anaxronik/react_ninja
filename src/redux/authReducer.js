const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
    }
}

export default authReducer

export const setUserData = (userId) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        },
    }
}
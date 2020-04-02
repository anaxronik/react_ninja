const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS '
const SET_CURENT_PAGE = 'SET-CURENT-PAGE '
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT '

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    curentPage: 1,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    } else {
                        return user
                    }
                })
            }
            return stateCopy
        }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    } else {
                        return user
                    }
                })
            }
            return stateCopy
        }
        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy
        }
        case SET_CURENT_PAGE: {
            let stateCopy = {
                ...state,
                curentPage: action.curentPage
            }
            return stateCopy
        }
        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
            return stateCopy
        }
        default:
            return state
    }
}
export default usersReducer

export const follow = (userId) => ({ type: FOLLOW, userId: userId, })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId, })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setCurentPage = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage: curentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount })
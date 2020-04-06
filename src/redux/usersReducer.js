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
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    } else {
                        return user
                    }
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    } else {
                        return user
                    }
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURENT_PAGE: {
            return {
                ...state,
                curentPage: action.curentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
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
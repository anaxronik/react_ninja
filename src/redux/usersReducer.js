const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS '
const SET_CURENT_PAGE = 'SET-CURENT-PAGE '
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT '

let initialState = {
    users:
        [
            {
                id: 1,
                name: 'Sergey',
                avatarUrl: 'https://prisnilos.su/uploads/image/sergey.jpg',
                followed: true,
                status: 'I am boss',
                location: {
                    country: 'Russia',
                    town: 'Ekaterinburg',
                },
            },
            {
                id: 2,
                name: 'Anna',
                avatarUrl: 'https://prisnilos.su/uploads/image/sergey.jpg',
                followed: false,
                status: 'I am princess',
                location: {
                    country: 'Belarusia',
                    town: 'Minsk',
                },
            },
        ],
    pageSize: 10,
    totalUsersCount: 1,
    curentPage: 1,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            console.log('FOLLOW');

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
            console.log('UNFOLLOW');

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

export const followAC = (userId) => ({ type: FOLLOW, userId: userId, })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId, })
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })
export const setCurentPageAC = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage: curentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount })
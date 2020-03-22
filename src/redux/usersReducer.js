const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS '

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
        ]
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
            break
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
            break
        }
        case SET_USERS: {
            // return { ...state, users: [...state.users, ...action.users] }
            break
        }
        default:
            return state

    }
}
export default usersReducer

export const followAC = (userId) => ({ type: FOLLOW, userId: userId, })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId, })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
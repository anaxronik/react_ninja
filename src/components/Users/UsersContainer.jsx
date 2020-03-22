import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followedButtonAction: (userId) => {
            console.log('followedButtonAction: (', userId);
            dispatch(unfollowAC(userId))
        },
        unfollowedButtonAction: (userId) => {
            console.log('unfollowedButtonAction: (', userId);
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
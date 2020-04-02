import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
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
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurentPage: (curentPage) => {
            dispatch(setCurentPageAC(curentPage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
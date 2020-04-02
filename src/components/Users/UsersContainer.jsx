import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurentPage, setTotalUsersCount } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
    }
}


const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
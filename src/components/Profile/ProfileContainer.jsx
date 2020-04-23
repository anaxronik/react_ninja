import React, { Component } from 'react'
import Profile from './ProfilePage'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'


class ProfileContainer extends Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = {
    setUserProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))
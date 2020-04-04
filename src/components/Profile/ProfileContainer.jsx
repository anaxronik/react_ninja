import React, { Component } from 'react'
import Profile from './Profile'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'


class ProfileContainer extends Component {

    componentDidMount = () => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
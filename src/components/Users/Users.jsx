import React, { Component } from 'react'
import userPhoto from '../../assets/images/userPhoto.png'
import Axios from 'axios'
import css from './Users.module.css';


export default class Users extends Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log('users in state:', this.props.users)
            })
    }

    render() {


        return <div>
            {this.props.users.map(user =>
                <div key={user.id} className={css.userBlock}>
                    <div><img src={userPhoto} alt="avatar" className={css.avatar} /></div>
                    <div className={css.info}>
                        <div><h4>{user.name}</h4></div>
                        <div>{user.id}</div>
                        <div>{user.status}</div>
                    </div>

                </div>
            )}

        </div >

    }
}

import React, { Component } from 'react'
import userPhoto from '../../assets/images/userPhoto.png'
import css from './Users.module.css';
import { NavLink } from 'react-router-dom'
import { getUsersFromServer, followToUser, unfollowFromUser } from '../../api/api';


export default class Users extends Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        getUsersFromServer(this.props.curentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNum) => {
        getUsersFromServer(pageNum, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    generatePagesArray = () => {
        let totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < totalPagesCount; i++) {
            pages.push(i)
        }
        const pageCount = 5
        const minPage = (this.props.curentPage - pageCount < 0) ? (0) : (this.props.curentPage - pageCount)
        const maxPage = this.props.curentPage + pageCount - 1 > totalPagesCount ? totalPagesCount : this.props.curentPage + pageCount - 1
        pages = pages.slice(minPage, maxPage)
        if (this.props.curentPage - pageCount < maxPage) {
            pages.push(totalPagesCount)
        }
        if (this.props.curentPage > pageCount) {
            pages.unshift(1)
        }
        return pages
    }

    followButtonClick = (userId) => {
        followToUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
            })
    }

    unfollowButtonClick = (userId) => {
        unfollowFromUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userId)
                }
            })
    }

    render() {
        const pages = this.generatePagesArray()

        return <div>
            <div className={css.pageButtonBlock}>
                {pages.map((pageNum) =>
                    <div
                        className={(this.props.curentPage === pageNum ? css.selectedPage + " " : '') + css.pageButton}
                        onClick={() => { this.onPageChanged(pageNum) }}
                    >{pageNum}</div>
                )}

            </div>
            {
                this.props.users.map(
                    user =>
                        <div key={user.id} className={css.userBlock}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img
                                        src={(!user.photos.small) ? userPhoto : `${user.photos.small}`}
                                        alt="avatar"
                                        className={css.avatar}
                                    />
                                </NavLink>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => { this.unfollowButtonClick(user.id) }}>Отписаться</button>
                                        : <button onClick={() => { this.followButtonClick(user.id) }}>Подписаться</button>
                                    }
                                </div>
                            </div>
                            <div className={css.info}>
                                <NavLink to={`/profile/${user.id}`}><h4>{user.name}</h4></NavLink>
                                <div>{user.id}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                )
            }
        </div >
    }
}

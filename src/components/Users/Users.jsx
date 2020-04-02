import React, { Component } from 'react'
import userPhoto from '../../assets/images/userPhoto.png'
import Axios from 'axios'
import css from './Users.module.css';


export default class Users extends Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNum) => {
        this.props.setCurentPage(pageNum)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {
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
                this.props.users.map(user =>
                    <div key={user.id} className={css.userBlock}>
                        <div><img src={userPhoto} alt="avatar" className={css.avatar} /></div>
                        <div className={css.info}>
                            <div><h4>{user.name}</h4></div>
                            <div>{user.id}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                )
            }

        </div >

    }
}

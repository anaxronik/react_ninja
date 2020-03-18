import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { updateNewMessageText, sendMessageCreator, updateNewMessageTextCreator } from './../../redux/state';


const Dialog = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={css.dialog} activeClassName={css.active} >
            {props.text}
        </NavLink >
    );
}


const Message = (props) => {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    );
}


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage
    let dialogsElement = props.state.dialogs.map(dialog => <Dialog text={dialog.name} id={dialog.id} />);
    let messagesElement = props.state.messages.map(message => <Message text={message.text} />)
    let newMessageText = props.state.newMessageText

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={css.block}>
            <div className={css.dialogs}>
                <h2>ДИАЛОГИ</h2>
                {dialogsElement}
            </div>

            <div className={css.messages}>
                {messagesElement}

                <div className={css.newMessageBox}>
                    <div>
                        <textarea
                            placeholder='Введите ваше сообщение'
                            value={newMessageText}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div className={css.newMessageButtonBox}>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink
            to={path}
            className={css.dialog}
            activeClassName={css.active}
        >
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


const NewMessageBlock = (props) => {
    let newMessageText = props.newMessageText

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.onNewMessageChange(text)
    }

    return (
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
    );
}

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(dialog => <Dialog text={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElement = props.messages.map(message => <Message text={message.text} key={message.id} />)

    return (
        <div className={css.block}>
            <div className={css.dialogs}>
                {dialogsElement}
            </div>

            <div className={css.messages}>
                {messagesElement}

                <NewMessageBlock
                    newMessageText={props.newMessageText}
                    onSendMessageClick={props.onSendMessageClick}
                    onNewMessageChange={props.onNewMessageChange}
                />
            </div>
        </div>
    );
}

export default Dialogs;

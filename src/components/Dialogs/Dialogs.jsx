import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


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
    let dialogsElement = props.state.dialogs.map(dialog => <Dialog text={dialog.name} id={dialog.id} />);
    let messagesElement = props.state.messages.map(message => <Message text={message.text} />)

    return (
        <div className={css.block}>
            <div className={css.dialogs}>
                <h2>ДИАЛОГИ</h2>
                {dialogsElement}
            </div>

            <div className={css.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;

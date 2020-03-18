import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState()
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    let newMessageText = state.dialogsPage.newMessageText

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            newMessageText={newMessageText}
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
        />
    );
}

export default DialogsContainer;

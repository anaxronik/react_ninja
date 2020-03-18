const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        case SEND_MESSAGE:
            let newMessage = {
                id: 111,
                text: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
    }

}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
})
export default dialogsReducer
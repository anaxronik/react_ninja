const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimich'
        },
        {
            id: 2,
            name: 'Andrey'
        },
        {
            id: 3,
            name: 'Sweta'
        },
        {
            id: 4,
            name: 'Sasha'
        },
    ],
    messages: [
        {
            id: 1,
            text: 'Вакузяптра Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem provident adipisci iure inventore vitae qui quaerat, odit nam debitis ea. Veniam neque ab enim numquam explicabo at dolor sequi aperiam?'
        },
        {
            id: 2,
            text: 'Следует отметить, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Повседневная практика показывает, что консультация с широким активом проверки влечёт за собой интересный процесс внедрения модернизации поэтапного и последовательного развития общества. Идейные соображения высшего порядка, а также консультация с широким активом позволяет оценить значение представляет собой интересный эксперимент новых принципов формирования материально-технической и кадровой базы.'
        },
        {
            id: 3,
            text: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации экономической целесообразности принимаемых изменений. Равным образом дальнейшее развитие различных форм деятельности требует анализа соответствующих условий активизации. Не вызывает сомнений, что социально-экономическое развитие способствует подготовке и реализации новых предложений.'
        },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SEND_MESSAGE: {
            let newMessage = {
                id: 111,
                text: state.newMessageText,
            }
            let stateCopy = { ...state }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.text
            return stateCopy
        }

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
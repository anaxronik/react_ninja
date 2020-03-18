const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: 1,
                    likesCount: 12,
                    text: 'Совершенно Не следует, однако, забывать, что повышение уровня гражданского сознания позволяет выполнять важные задания по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
                },
                {
                    id: 2,
                    likesCount: 43,
                    text: 'Не следует, однако, забыв по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
                },
                {
                    id: 3,
                    likesCount: 12,
                    text: 'Не следует, однако, забыповышение уровня гражданского сознания позволяет выполнять важные задания по разработке позиции, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
                },
                {
                    id: 4,
                    likesCount: 53,
                    text: 'Не следует, однако, забывать, что повышение уровнии, занимаемых участниками в отношении поставленных задач. Таким образом реализация намеченных плановых заданий играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требует анализа поставленных обществом и правительством задач.'
                },
            ],
        },
        dialogsPage: {
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
        },
        sidabar: {},
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        // console.log('state changed');
    },

    dispatch(action) {
        if (action.type == ADD_POST) {
            let newPost = {
                id: 5,
                likesCount: 0,
                text: this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type == UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type == UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this._state)
        } else if (action.type == SEND_MESSAGE) {
            let newMessage = {
                id: 111,
                text: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this.state)
        }
    }
}
export default store
window.state = store._state

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
})
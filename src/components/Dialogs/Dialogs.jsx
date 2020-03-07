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


const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sweta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Димыч' },
        { id: 5, name: 'Димыч' },
    ]

    let dialogsElement = dialogsData.map(d => <Dialog text={d.name} id={d.id} />);

    let messagesData = [
        { id: 1, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem provident adipisci iure inventore vitae qui quaerat, odit nam debitis ea. Veniam neque ab enim numquam explicabo at dolor sequi aperiam?' },
        { id: 2, text: 'Следует отметить, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Повседневная практика показывает, что консультация с широким активом проверки влечёт за собой интересный процесс внедрения модернизации поэтапного и последовательного развития общества. Идейные соображения высшего порядка, а также консультация с широким активом позволяет оценить значение представляет собой интересный эксперимент новых принципов формирования материально-технической и кадровой базы.' },
        { id: 3, text: 'Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации экономической целесообразности принимаемых изменений. Равным образом дальнейшее развитие различных форм деятельности требует анализа соответствующих условий активизации. Не вызывает сомнений, что социально-экономическое развитие способствует подготовке и реализации новых предложений.' },
        { id: 4, text: 'Следует отметить, что высокотехнологичная концепция общественной системы обеспечивает широкому кругу специалистов новых принципов формирования материально-технической и кадровой базы. Равным образом высокотехнологичная концепция общественной системы играет важную роль в формировании направлений прогрессивного развития. С другой стороны высокотехнологичная концепция общественной системы способствует подготовке и реализации экономической целесообразности принимаемых изменений.' },
        { id: 5, text: 'Следует отметить, что рамки и место обучения кадров создаёт предпосылки качественно новых шагов для форм воздействия. Следует отметить, что сложившаяся структура организации способствует повышению качества модели развития. Прежде всего консультация с широким активом способствует подготовке и реализации поэтапного и последовательного развития общества.' },
        { id: 6, text: 'Pariatur in veniam reprehenderit laborum minim adipisicing id occaecat est excepteur id occaecat id irure.' }
    ]

    let messagesElement = messagesData.map(m => <Message text={m.text} />)

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

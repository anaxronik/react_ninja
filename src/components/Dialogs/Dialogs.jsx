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
    return (
        <div className={css.block}>
            <div className={css.dialogs}>
                <h2>ДИАЛОГИ</h2>
                <Dialog text='Димыч' id='1' />
                <Dialog text='Andrey' id='2' />
                <Dialog text='Sweta' id='3' />
                <Dialog text='Sasha' id='4' />
                <Dialog text='Victor' id='5' />
            </div>

            <div className={css.messages}>
                <Message text='asdasdasdas as dasda sdasd asd' />
                <Message text='as45g4g 4g45g4g 4g 45g 45g 4 g45 dsd' />
                <Message text='asd4 g45 g45 g45g4sd' />
                <Message text='asd45 g45 g45 g45 g4 5g45 g5sd' />
            </div>
        </div>
    );
}

export default Dialogs;

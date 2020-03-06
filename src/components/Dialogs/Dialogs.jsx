import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={css.block}>
            <div className={css.dialogs}>
                <div className={css.dialog}>
                    Dimich
                </div>
                <div className={`${css.dialog} ${css.active}`}>
                    Andrey
                </div>
                <div className={css.dialog}>
                    Sweta
                </div>
                <div className={css.dialog}>
                    Sasha
                </div>
                <div className={css.dialog}>
                    Victor
                </div>
            </div>

            <div className={css.messages}>
                <div className={css.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas, necessitatibus beatae sed incidunt quasi et pariatur autem in rerum? Provident rem quam hic reprehenderit ab, vitae accusantium nam id.</div>
                <div className={css.message}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur earum voluptates expedita sit. Doloribus iste sint sequi, ratione cumque laudantium commodi cupiditate velit, accusantium vel optio sit tenetur veritatis voluptas?</div>
                <div className={css.message}>Не вызывает сомнений, что начало повседневной работы по формированию позиции играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям. Идейные соображения высшего порядка, а также постоянное информационно-пропогандистское обеспечение нашей деятельности проверки влечёт за собой интересный процесс внедрения модернизации системы обучения кадров, соответствующей насущным потребностям. Таким образом рамки и место обучения кадров создаёт предпосылки качественно новых шагов для новых принципов формирования материально-технической и кадровой базы.</div>
                <div className={css.message}>Прежде всего понимание сущности ресурсосберегающих технологий способствует повышению качества поэтапного и последовательного развития общества. Повседневная практика показывает, что рамки и место обучения кадров способствует повышению качества модели развития. Идейные соображения высшего порядка, а также высокотехнологичная концепция общественной системы требует определения и уточнения поставленных обществом и правительством задач.</div>
                <div className={css.message}>Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требует от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации системы обучения кадров, соответствующей насущным потребностям. Таким образом управление и развитие структуры создаёт предпосылки качественно новых шагов для укрепления демократической системы.</div>
            </div>
        </div>
    );
}

export default Dialogs;

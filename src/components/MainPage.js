import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';


function MainPage(props) {
    function buyPlan(){
        props.handleBuyPopupOpenClick('План питания', '3000 ₽')
    }
    function buyHomeTrain(){
        props.handleBuyPopupOpenClick('Программа домашних тренировок', '4000 ₽')
    }
    function buyOnline(){
        props.handleBuyPopupOpenClick('Онлайн ведениея', '7000 ₽/мес')
    }
    return (
        <>
            <header className="header">
                <h1 className="header__title">Ренат<br></br>Хаматов</h1>
                {/* <h1 className="header__title-back">Ренат<br></br>Хаматов</h1> */}
                <Link className="header__button" to="/purchase">Заниматься</Link>
                <div className="header__photo"></div>
            </header>
            <main>
                <section className="section-with-bg">
                    <h2 className="section-with-bg__title">Я живу этим спортом: он стал для меня образом жизни.</h2>
                    <p className="section-with-bg__text">За 10 лет под моим руководством множество людей сильно изменилось, став только лучше.<br /><br />Каждый человек преследует свои цели в фитнесе: один хочет сбросить «лишнее», другой же, наоборот, хочет набрать мышечной массы. Однако я не ориентируюсь на определенный круг лиц, и поэтому готов помочь каждому, кто стремится быть всегда в отличной форме.<br /><br />Ты готов меняться, но тебе не хватает наставника? Я именно тот человек, который поможет тебе стать лучшей версией себя.<br /><br />Ты устал смотреть на нынешнего себя в зеркало и хочешь выглядеть совершенно по-другому? Я именно тот человек, который поможет тебе стать здоровей.<br /><br />Ты не можешь себя дисциплинировать или боишься травмироваться? Я именно тот человек, который поможет тебе преодолеть все трудности.<br /><br />Вместе мы сможем все: совместно с тобой я составлю план питания, курс тренировок и помогу тебе измениться в лучшую сторону.</p>
                    {/* <div className="section-with-bg__image"></div> */}
                </section>
                <section className="maintenance">
                    <ul className="maintenance__container">
                        <h2 className="maintenance__title">Что входит в онлайн ведение:</h2>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Составление плана питания</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Отслеживание всех ваших результатов</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Корректировка на протяжении всего курса</p>
                        </li>
                        <Link className="maintenance__button-more" to="/online">Подробнее</Link>
                    </ul>
                </section>
                <section className="purchase" id="purchase">
                    <p className="purchase__title">Я всегда отношусь ко всем своим клиентам с большой ответственностью!</p>
                    <div className="purchase__item" onClick={buyPlan}>
                        <p className="purchase__item-name">План питания</p>
                        <p className="purchase__item-price">3000 &#8381;</p>
                    </div>
                    <div className="purchase__item" onClick={buyHomeTrain}>
                        <p className="purchase__item-name">Программа домашних тренировок</p>
                        <p className="purchase__item-price">4000 &#8381;</p>
                    </div>
                    <div className="purchase__item" onClick={buyOnline}>
                        <p className="purchase__item-name">Онлайн ведение</p>
                        <p className="purchase__item-price">7000 &#8381;/мес</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MainPage;

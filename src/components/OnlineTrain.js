import '../index.css';
import React from 'react';
import { Link,  useHistory  } from 'react-router-dom';


function OnlineTrain(props) {
    const history = useHistory();
    return (
        <>
            <main>
                <section className="maintenance">
                <div className="maintenance__back-arrow" onClick={() => history.goBack()}></div>
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
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Постоянная связь с вами 24/7</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Ответы на все ваши вопросы</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Консультация по спортивному питанию</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Один раз в две недели делаем отчет по прогрессу, вносим корректировки, при необходимости меняем, дополняем программу</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Доступ в личный чат, где мы с вами постоянно общаемся, по мере надобности (хоть каждый день, если нужно)</p>
                        </li>
                        <li className="maintenance__item">
                            <span className="maintenance__circle"></span>
                            <p className="maintenance__text">Созваниваемся раз в неделю и разбираем все вопросы которые вас интересуют.</p>
                        </li>
                        <p className="maintenance__paragraph">И поверьте мне, это очень удобно, вы можете заниматься в любое время, когда вам угодно и где вам угодно.<br/><br/>У вас нет привязанности ко времени.<br/><br/>Запомните самое главное в нашей жизни это время! Время, это главный наш ресурс и надо им очень дорожить и грамотно распоряжаться!</p>
                        <Link className="maintenance__button-more" to="/purchase">Записаться</Link>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default OnlineTrain;

import '../index.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import renat_head from '../images/section-head.png'
// import renat1 from '../images/section-image.JPG'
import renat2 from '../images/section-image-2.jpg'
import renat4 from '../images/section-image-4.jpg'



function About(props) {
    const history = useHistory();
    return (
        <main>
            <div className="maintenance__back-arrow" onClick={() => history.goBack()}></div>
            <section className="section-with-bg">
                <img className="section-with-bg__about-image" src={renat_head} alt="Фото Рената" />
                <h2 className="section-with-bg__title">Меня зовут Хаматов Ренат Ислямович, мне 35 лет. Я работаю в фитнес индустрии уже больше 10 лет.</h2>
                <p className="section-with-bg__text">
                    Образование:<br /><br />РГПУ им Герцена А.Ф.К (Адаптивная физическая культура)<br /><br />Дополнительно образование:<br /><br />"Национальный университет фитнеса" УИЦ Инструктор тренажерного зала.<br /><br /><br /><br /></p>
                <img className="section-with-bg__about-image" src={renat2} alt="Фото Рената" />
                <h3 className="section-with-bg__title">Я живу этим спортом: он стал для меня образом жизни.</h3>
                <p className="section-with-bg__text">За 10 лет под моим руководством множество людей сильно изменилось, став только лучше.<br /><br />Каждый человек преследует свои цели в фитнесе: один хочет сбросить «лишнее», другой же, наоборот, хочет набрать мышечной массы. Однако я не ориентируюсь на определенный круг лиц, и поэтому готов помочь каждому, кто стремится быть всегда в отличной форме.<br /><br />Ты готов меняться, но тебе не хватает наставника? Я именно тот человек, который поможет тебе стать лучшей версией себя.<br /><br />Ты устал смотреть на нынешнего себя в зеркало и хочешь выглядеть совершенно по-другому? Я именно тот человек, который поможет тебе стать здоровей.<br /><br />Ты не можешь себя дисциплинировать или боишься травмироваться? Я именно тот человек, который поможет тебе преодолеть все трудности.<br /><br />Вместе мы сможем все: совместно с тобой я составлю план питания, курс тренировок и помогу тебе измениться в лучшую сторону.<br /><br /><br /><br /></p>
                <img className="section-with-bg__about-image" src={renat4} alt="Фото Рената" />
            </section>
        </main>
    );
}

export default About;

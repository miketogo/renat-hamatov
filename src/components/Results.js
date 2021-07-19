import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { Link, useHistory } from 'react-router-dom';

import result1 from '../images/result-1.jpg'
import result1_2 from '../images/result-1_1.jpg'
import result1_3 from '../images/result-1_2.jpg'
import result2 from '../images/result-2.jpg'
import result2_1 from '../images/result-2_1.jpg'
import result3 from '../images/result-3.jpg'
import result3_1 from '../images/result-3_1.jpg'
import result4 from '../images/result-4.jpg'
import result4_1 from '../images/result-4_1.jpg'
import result4_2 from '../images/result-4_2.jpg'
import result5 from '../images/result-5.jpg'
import result6 from '../images/result-6.jpg'
import result7 from '../images/result-7.jpg'
import result8 from '../images/result-8.jpg'
import result8_1 from '../images/result-8_1.jpg'
import result8_2 from '../images/result-8_2.jpg'
import result9 from '../images/result-9.jpg'
import result9_1 from '../images/result-9_1.jpg'
import result9_2 from '../images/result-9_2.jpg'
import result10 from '../images/result-10.jpg'


function Results(props) {
    const history = useHistory();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <main>
            <div className="maintenance__back-arrow" onClick={() => history.goBack()}></div>
            <section className="section-with-bg">
                <h2 className="section-with-bg__title">Наши результаты:</h2>
                <Slider {...settings}>
                    <img src={result1} alt="Результат 1" className="section-with-bg__slider-image" />
                    <img src={result1_2} alt="Результат 1" className="section-with-bg__slider-image" />
                    <img src={result1_3} alt="Результат 1" className="section-with-bg__slider-image" />
                </Slider>
                <Slider {...settings}>
                    <img src={result2} alt="Результат 2" className="section-with-bg__slider-image" />
                    <img src={result2_1} alt="Результат 2" className="section-with-bg__slider-image" />
                </Slider>
                <Slider {...settings}>
                    <img src={result3} alt="Результат 3" className="section-with-bg__slider-image" />
                    <img src={result3_1} alt="Результат 3" className="section-with-bg__slider-image" />
                </Slider>
                <Slider {...settings}>
                    <img src={result4_1} alt="Результат 4" className="section-with-bg__slider-image" />
                    <img src={result4_2} alt="Результат 4" className="section-with-bg__slider-image" />
                    <img src={result4} alt="Результат 4" className="section-with-bg__slider-image" />
                </Slider>
                <Slider {...settings}>
                    <img src={result8} alt="Результат 8" className="section-with-bg__slider-image" />
                    <img src={result8_2} alt="Результат 8" className="section-with-bg__slider-image" />
                    <img src={result8_1} alt="Результат 8" className="section-with-bg__slider-image" />
                </Slider>
                <Slider {...settings}>
                    <img src={result9} alt="Результат 9" className="section-with-bg__slider-image" />
                    <img src={result9_1} alt="Результат 9" className="section-with-bg__slider-image" />
                    <img src={result9_2} alt="Результат 9" className="section-with-bg__slider-image" />
                </Slider>
                <img src={result5} alt="Результат 5" className="section-with-bg__image" />
                <img src={result6} alt="Результат 6" className="section-with-bg__image" />
                <img src={result7} alt="Результат 7" className="section-with-bg__image" />
                <img src={result10} alt="Результат 7" className="section-with-bg__image" />
                <h2 className="section-with-bg__title"><br /><br />Хочешь так же?</h2>
                <Link className="maintenance__button-more" to="/online">Хочу!</Link>
            </section>
        </main>
    );
}

export default Results;

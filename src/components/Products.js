import '../index.css';
import React from 'react';


function Products(props) {
    function buyPlan(){
        props.handleBuyPopupOpenClick('План питания', '3000 ₽')
    }
    function buyHomeTrain(){
        props.handleBuyPopupOpenClick('Программа домашних тренировок', '4000 ₽/мес')
    }
    function buyOnline(){
        props.handleBuyPopupOpenClick('Онлайн ведение', '7000 ₽/мес')
    }
    return (
        <>
                <section className="purchase" id="purchase">
                    <p className="purchase__title">Я всегда отношусь ко всем своим клиентам с большой ответственностью!</p>
                    <div className="purchase__item" onClick={buyPlan}>
                        <p className="purchase__item-name">План питания</p>
                        <p className="purchase__item-price">3000 &#8381;</p>
                    </div>
                    <div className="purchase__item" onClick={buyHomeTrain}>
                        <p className="purchase__item-name">Программа домашних тренировок</p>
                        <p className="purchase__item-price">4000 &#8381;/мес</p>
                    </div>
                    <div className="purchase__item" onClick={buyOnline}>
                        <p className="purchase__item-name">Онлайн ведение</p>
                        <p className="purchase__item-price">7000 &#8381;/мес</p>
                    </div>
                </section>
        </>
    );
}

export default Products;

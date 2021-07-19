import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Menu(props) {
    return (
        <>
            <div className="header__menu" onClick={props.handleMenuOpenClick}>
                <span className="header__menu-line"></span>
                <span className="header__menu-line"></span>
                <span className="header__menu-line"></span>
            </div>
            <div className={`menu-popup ${props.isMenuPopupOpen ? 'menu-popup_active' : ''}`}>
                <div className={`menu-popup__container ${props.isMenuPopupOpen ? 'menu-popup__container_active' : ''}`}>
                    <div className="menu-popup__close" onClick={props.handleMenuCloseClick}></div>
                    <nav className="menu-popup__nav-container">
                        <Link onClick={props.handleMenuCloseClick} className="menu-popup__nav-item" to="/">
                            <p className="menu-popup__nav-item-text">Главная</p>
                        </Link>
                        <Link onClick={props.handleMenuCloseClick} className="menu-popup__nav-item" to="/about-me">
                            <p className="menu-popup__nav-item-text">Обо мне</p>
                        </Link>
                        <Link onClick={props.handleMenuCloseClick} className="menu-popup__nav-item" to="/results">
                            <p className="menu-popup__nav-item-text">Результаты</p>
                        </Link>
                        <Link onClick={props.handleMenuCloseClick} className="menu-popup__nav-item" to="/purchase">
                            <p className="menu-popup__nav-item-text">Заниматься</p>
                        </Link>
                        <a target="_blank" rel="noreferrer" onClick={props.handleMenuCloseClick} className="menu-popup__nav-item" href="https://forms.gle/KZmMLWaxvcsC4kD98">
                            <p className="menu-popup__nav-item-text">Анкета</p>
                        </a>
                    </nav>
                    <div className="menu-popup__icon-container">
                        <a href="https://www.instagram.com/renat_hamatov/" target="_blank" rel="noreferrer">
                            <svg className="menu-popup__icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="menu-popup__icon" d="M18.962 0H7.03795C3.15716 0 0 3.15716 0 7.03795V18.9622C0 22.8428 3.15716 26 7.03795 26H18.9622C22.8428 26 26 22.8428 26 18.9622V7.03795C26 3.15716 22.8428 0 18.962 0V0ZM24.4757 18.9622C24.4757 22.0023 22.0023 24.4757 18.962 24.4757H7.03795C3.99763 24.4757 1.52423 22.0023 1.52423 18.9622V7.03795C1.52423 3.99763 3.99763 1.52423 7.03795 1.52423H18.9622C22.0023 1.52423 24.4757 3.99763 24.4757 7.03795V18.9622Z" fill="#EEF4EF" />
                                <path className="menu-popup__icon" d="M13 5.89062C9.0799 5.89062 5.89081 9.07972 5.89081 12.9998C5.89081 16.9199 9.0799 20.109 13 20.109C16.92 20.109 20.1091 16.9199 20.1091 12.9998C20.1091 9.07972 16.92 5.89062 13 5.89062V5.89062ZM13 18.5847C9.92057 18.5847 7.41504 16.0794 7.41504 12.9998C7.41504 9.92039 9.92057 7.41485 13 7.41485C16.0796 7.41485 18.5849 9.92039 18.5849 12.9998C18.5849 16.0794 16.0796 18.5847 13 18.5847V18.5847Z" fill="#EEF4EF" />
                            </svg>
                        </a>
                        <a href="https://t.me/renat_hamatov" target="_blank" rel="noreferrer">
                            <svg className="menu-popup__icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="menu-popup__icon" d="M0.459245 12.5359L6.45017 14.7719L8.76902 22.2293C8.91739 22.7069 9.50144 22.8835 9.8891 22.5665L13.2285 19.8442C13.5786 19.5589 14.0772 19.5447 14.443 19.8103L20.4662 24.1832C20.8809 24.4846 21.4684 24.2574 21.5724 23.7563L25.9847 2.53242C26.0982 1.98503 25.5603 1.52838 25.0391 1.72997L0.452225 11.2149C-0.154528 11.4489 -0.149241 12.3079 0.459245 12.5359ZM8.39531 13.5816L20.1038 6.37036C20.3142 6.24114 20.5307 6.52567 20.35 6.69328L10.6871 15.6754C10.3475 15.9916 10.1284 16.4147 10.0663 16.8739L9.73717 19.3132C9.69358 19.6389 9.23607 19.6713 9.14619 19.3561L7.88025 14.9079C7.73526 14.4005 7.94655 13.8586 8.39531 13.5816Z" fill="#EEF4EF" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=79522400263">
                            <svg className="menu-popup__icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="menu-popup__icon" fillRule="evenodd" clipRule="evenodd" d="M21.6222 4.34209C19.3418 2.05902 16.309 0.801144 13.0781 0.799805C6.42051 0.799805 1.00219 6.21798 0.999508 12.8774C0.998615 15.0062 1.55473 17.0842 2.61176 18.9159L0.898193 25.1748L7.30124 23.4952C9.06554 24.4576 11.0518 24.9647 13.0732 24.9653H13.0783C19.7351 24.9653 25.154 19.5467 25.1566 12.887C25.1579 9.65955 23.9027 6.62502 21.6222 4.34209ZM13.0781 22.9255H13.0739C11.2726 22.9248 9.50591 22.4407 7.96432 21.5261L7.5979 21.3085L3.79823 22.3053L4.81242 18.6007L4.57364 18.2208C3.56867 16.6224 3.038 14.775 3.03889 12.8781C3.04097 7.343 7.54464 2.83978 13.0821 2.83978C15.7636 2.84068 18.2843 3.88625 20.1796 5.78386C22.075 7.68146 23.1182 10.2038 23.1173 12.8863C23.1149 18.4218 18.6116 22.9255 13.0781 22.9255ZM18.5848 15.4067C18.2831 15.2555 16.7992 14.5256 16.5225 14.4248C16.2461 14.324 16.0446 14.2739 15.8437 14.5759C15.6424 14.8779 15.0641 15.5578 14.8879 15.7591C14.7118 15.9605 14.5359 15.9858 14.2341 15.8347C13.9322 15.6837 12.9598 15.3648 11.807 14.3367C10.9099 13.5364 10.3042 12.5481 10.1281 12.2461C9.95223 11.9438 10.1266 11.7962 10.2605 11.6302C10.5872 11.2245 10.9143 10.7991 11.0149 10.5979C11.1156 10.3964 11.0652 10.2201 10.9896 10.0691C10.9143 9.91811 10.3108 8.43261 10.0593 7.82815C9.81417 7.2399 9.56557 7.31934 9.3802 7.31012C9.20435 7.30134 9.00306 7.29956 8.80177 7.29956C8.60063 7.29956 8.27362 7.37498 7.99691 7.67729C7.72034 7.97945 6.94077 8.70948 6.94077 10.195C6.94077 11.6805 8.0222 13.1155 8.17305 13.317C8.32391 13.5184 10.3013 16.5668 13.3286 17.8739C14.0487 18.1851 14.6108 18.3707 15.0492 18.5098C15.7722 18.7395 16.43 18.707 16.9501 18.6294C17.53 18.5426 18.7355 17.8992 18.9872 17.1943C19.2387 16.4893 19.2387 15.8851 19.1631 15.7591C19.0878 15.6332 18.8865 15.5578 18.5848 15.4067Z" fill="black" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div onClick={props.handleMenuCloseClick} className={`menu-popup__bg ${props.isMenuPopupOpen ? 'menu-popup__bg_active' : ''}`}></div>
            </div>
        </>

    );
}

export default Menu;

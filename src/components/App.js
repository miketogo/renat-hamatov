import '../index.css';
import React from 'react';

function App() {
  return (
    <div className="root">
      <div className="page">
        <header className="header">
          <div className="header__menu">
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </div>
          <h1 className="header__title">Ренат<br></br>Хаматов</h1>
          <button className="header__button">Заниматься</button>
          <div className="header__photo"></div>
        </header>
        <main>
          <section className="section-with-bg">
          <p className="section-with-bg__text">Профессиональный<br></br>тренер</p>
          <div className="section-with-bg__image"></div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  React from "react";
import { Route , useLocation } from 'react-router-dom';

import Menu from './Menu';
import MainPage from './MainPage';
import OnlineTrain from './OnlineTrain';
import Purchase from './Purchase';
import Footer from './Footer';
import About from './About';
import Results from './Results';
import BuyPopup from './BuyPopup';




function App() {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isBuyPopupOpen, setBuyPopupOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('Не выбрано');
  const [selectedPrice, setSelectedPrice] = React.useState('Не выбрано')

  const { pathname } = useLocation();
  
  React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  function handleMenuOpenClick() {
    disableScrolling()
    console.log('menu clicked')
    setMenuPopupOpen(true)
  }

  function handleMenuCloseClick() {
    enableScrolling()
    console.log('close clicked')
    setMenuPopupOpen(false)
  }
  function handleBuyPopupOpenClick(name, price) {
    var x = window.scrollX;
    var y = window.scrollY;
    window.scrollTo(0, 0);
    setSelectedItem(name)
    setSelectedPrice(price)
    console.log('buy clicked')
    setBuyPopupOpen(true)
  }

  function handleBuyPopupCloseClick() {
    
    console.log('close clicked')
    setBuyPopupOpen(false)
    setSelectedItem('Не выбрано')
    setSelectedPrice('Не выбрано')
  }


  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  }

  function enableScrolling() {
    window.onscroll = function () { };
  }

  return (
    <div className="root">
      <div className="page">
        <BuyPopup  handleBuyPopupCloseClick={handleBuyPopupCloseClick} isBuyPopupOpen={isBuyPopupOpen} selectedItem={selectedItem} selectedPrice={selectedPrice}/>
        <Menu handleMenuOpenClick={handleMenuOpenClick} isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
        
        <Route exact path="/">
          <MainPage handleBuyPopupOpenClick={handleBuyPopupOpenClick} />
        </Route>
        <Route path="/online">
          <OnlineTrain />
        </Route>
        <Route path="/purchase">
          <Purchase handleBuyPopupOpenClick={handleBuyPopupOpenClick}/>
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

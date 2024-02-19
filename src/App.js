import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/starRating/StarRating';
import ImageSlider from './components/imageSlider/ImageSlider';
import More from './components/load-more/More';
import sidemenu from './components/load-more/data';
import QrGeneratore from './components/qrGeneratore/QrGeneratore';
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limi t={10} page={1} /> */}
      {/* <More menus={sidemenu} /> */}
      <QrGeneratore />
    </div>
  );
}

export default App;

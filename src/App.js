import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/starRating/StarRating';
import ImageSlider from './components/imageSlider/ImageSlider';
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} />
    </div>
  );
}

export default App;

import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/starRating/StarRating';
import ImageSlider from './components/imageSlider/ImageSlider';
import More from './components/load-more/More';
import sidemenu from './components/load-more/data';
import QrGeneratore from './components/qrGeneratore/QrGeneratore';
import SwitchTheme from './components/switchTheme/SwitchTheme';
import CustomScroll from './components/CustomScroll/CustomScroll';
import TabsContent from './components/customTabs/TabsContent';
import ModalTest from './components/modalPopup/ModalTest';
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} /> */}
      {/* <More menus={sidemenu} /> */}
      {/* <QrGeneratore /> */}
      {/* <SwitchTheme /> */}
      {/* <CustomScroll url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabsContent /> */}
      <ModalTest />
    </div>
  );
}

export default App;

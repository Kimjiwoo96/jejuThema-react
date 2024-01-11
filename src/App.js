//bine 작업
import 'bootstrap/dist/css/bootstrap.min.css';
import Hd from "./component/bine/Hd";
import MainBanner from "./component/bine/MainBanner";


function App() {
  return (
    <>
      <Hd></Hd>
      <div id='slidebanner'>
        <MainBanner></MainBanner>
      </div>
    </>
  );
}

export default App;

import {festivalObj} from "./js/commonData";
import Festival_p from "./pages/Festival_p";
import Video_p from "./pages/Video_p";

function App() {
  return (
    <>
      <Festival_p
        commonData={festivalObj}
      ></Festival_p>

      <Video_p></Video_p>
    </>
  );
}

export default App;

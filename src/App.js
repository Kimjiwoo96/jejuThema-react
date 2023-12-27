import {festivalObj} from "./js/commonData";
import Festival_p from "./pages/Festival_p";

function App() {
  return (
    <>
      <Festival_p
        commonData={festivalObj}
      ></Festival_p>
    </>
  );
}

export default App;

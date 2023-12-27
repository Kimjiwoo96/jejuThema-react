import {festivalObj} from "./js/commonData";
import Festival_p from "./pages/Festival_p";
import Video_p from "./pages/Video_p";
import Event_p from "./pages/Event_p";
import Comment_p from "./pages/Comment_p";

function App() {
  return (
    <>
      <Festival_p
        commonData={festivalObj}
      ></Festival_p>

      <Video_p></Video_p>
      <Event_p
      ></Event_p>
      <Comment_p></Comment_p>
    </>
  );
}

export default App;

import { festivalObj } from "./js/commonData";
import Festival_p from "./pages/Festival_p";
import Video_p from "./pages/Video_p";
import Event_p from "./pages/Event_p";
import Comment_p from "./pages/Comment_p";
import Quickbtns from "./component/kjw/Quickbtn";

function App() {
  // style
  const QbtnFix = {position:"fixed",right:"30px",bottom:"30px",display:"flex", flexDirection:"column",alignItems:"flex-end"}
  const toTop = {
    backgroundColor : "#059B84",
    marginTop:"10px",
    width:"3.4rem",
    height:"3.4rem",
    textAlign:"center",
    borderRadius:"50%",
    cursor:"pointer"
  }
  const toTopi = {
   color:"#fff",
   fontSize:"33px",
  }



  function handleScrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤
    });
  }


  return (
    <div id="wrap">
      <div style={QbtnFix}>
        <Quickbtns
          quickText={{
            text: "대중교통",
            icons: "bi bi-bus-front",
            href:"http://bus.jeju.go.kr/",
            target:"_blank"
          }}
        ></Quickbtns>

      <Quickbtns
          quickText={{
            text: "신청하기",
            icons: "bi bi-check2-square",
            href:"#applyform",
            target:""
          }}
          onClick={() => {
            handleScrollToTop()
          }}
        ></Quickbtns>


        <div
          style={toTop}
          onClick={() => {
            handleScrollToTop()
          }}
        >
          <i style={toTopi} class="bi bi-arrow-up-short"></i>
        </div>
      </div>


      <Festival_p commonData={festivalObj}></Festival_p>

      <Video_p></Video_p>
      <Event_p></Event_p>
      <Comment_p></Comment_p>
    </div>
  );
}

export default App;

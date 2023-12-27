function Hd() {
    return (
      <>
  
        <header id="hd">
          <div className="minibanner text-center">
            <a href="https://www.jeju.go.kr/booking/index.htm" target="_blank">통합 예약</a>
          </div>
          <div className="container max-w1280 d-flex justify-content-between align-items-center mx-auto">
            <a href="#" className="logo"><img src="/img/logo.png" alt="로고이미지" /></a>
            <ul id="gnbs" className="d-flex justify-content-around">
              <li><a href="#Event" className="scrollmenu">행사</a></li>
              <li><a href="#Tourism" className="scrollmenu">관광명소</a></li>
              <li><a href="#video" className="scrollmenu">홍보영상</a></li>
              <li><a href="#discountEvent" className="scrollmenu">이벤트</a></li>
              <li><a href="#route" className="scrollmenu">투어경로추천</a></li>
              <li><a href="#Comments" className="scrollmenu">커뮤니티</a></li>
            </ul>
          </div>
        </header>
      </>
  
    );
  }
  
  export default Hd
  
function Maintext(MText){

    const center = {textAlign:"center"}

    return(
       <div id="mainTitle" style={center}>
            <h1>{MText.title}</h1>
            <h4>{MText.subTitle}</h4>
       </div>
    );
}

export default Maintext;
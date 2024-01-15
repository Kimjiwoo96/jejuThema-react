function Maintext(MText){

    const center = {textAlign:"center",marginBottom:"40px"}

    return(
       <div id="mainTitle" style={center}>
            <h2>{MText.title}</h2>
            <h5>{MText.subTitle}</h5>
       </div>
    );
}

export default Maintext;
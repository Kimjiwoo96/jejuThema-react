// import "../../scss/kjw/Festival.module.scss"
import FestivalStyles from "../../scss/kjw/Festival.module.scss";


function Festival(commonData){


    return(
        <>
        
            <div className={FestivalStyles.festivalWrap}>
                {
                    commonData.commonData.map((el, idx) => {
                        return(
                            <div key={`festival${idx}`}>
                                <img src={el.img} alt={`Festival ${idx}`}/>
                                <div>
                                    <h3>{el.festivalNm}</h3>
                                    <p>{el.festivalCon}</p>              
                                    <span>{el.festivalDate}</span> ~ <span>{el.festivalTo}</span>
                                </div>
                            </div>
                        );
                    })
                } 
            </div>
      
           
        </>
    );







}

export default Festival;
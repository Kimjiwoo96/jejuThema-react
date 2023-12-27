// module 
import { useState } from "react";
// 파일 import
import eventStyles from "../../scss/kjw/Event.module.scss";
import {eventObj} from "../../js/commonData";



function Event({}){

    const [isHovering, setIsHovering] = useState(0);


    return(
        <>
        <div className={eventStyles.eventWrap}>
             {
                eventObj.map((el,idx) => {
                    return(
                    <div 
                    className={`${eventStyles.innerDiv} hoverStyle${idx+1}`}
                    key={`event ${idx}`}
                    onMouseOver={() => setIsHovering(idx+1)}
                    onMouseOut={() => setIsHovering(0)}
                    >
                        <p><span>item0{idx + 1}</span></p>
                        <h4>{el.subTitle}</h4>
                        <h2>{el.mainTitle}</h2>
                        <img src={el.href} alt={idx}/>
                    </div>
                    )
                })
            }       
        </div>
           
        </>
    );
}

export default Event;
















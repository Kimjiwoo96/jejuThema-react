import React from 'react'
import {attraction} from "../js/commonData";
import Maintext from "../component/kjw/Maintext"
import AttractionStyle from "../scss/kjw/Attraction.module.scss"
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import { useEffect, useState , useRef } from "react"
import 'swiper/css';
import {Div} from "../js/CommonUi"



function Attraction_p() { 

    const breakpoints = {
        320: {
          slidesPerView: 1.5,
          spaceBetween: -50,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 100,
        },
        1320: {
          slidesPerView: 4,
          spaceBetween: 100,
        }
      }

    return (
        
     <Div>
        <Maintext
            title="이런 명소 어떠세요?"
            subTitle=""
        ></Maintext>
        
        <div className={AttractionStyle.attractionDiv}>
        <Swiper
            modules={[Autoplay]}
            autoplay={{ 
                delay: 3000,
                disableOnInteraction : false
            }}
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={breakpoints}
            loop = {true}
        >
        {
            attraction.map((el,idx) => {
                return(
                    <SwiperSlide key={idx}>
                        <div className={AttractionStyle.attractionWrap}> 
                            <div className={AttractionStyle.con}>
                                <div
                                     style={{
                                        backgroundImage:`url(${el.img})`,
                                        backgroundRepeat:"none",
                                        backgroundSize:"cover"
                                    }}
                                >
                                    <section>
                                        <h2>{el.title}</h2>
                                        <p>{el.txt}</p>
                                        <span>{el.Location}</span>

                                        <ul
                                            className={AttractionStyle.hash}
                                        >
                                            <li>{el.hashTag[0]}</li>
                                            <li>{el.hashTag[1]}</li>
                                            <li>{el.hashTag[2]}</li>
                                        </ul>
                                    </section>
                                    
                                </div>
                                
                            </div>
                        </div>  
                    </SwiperSlide>     
                )
            })
        }
        </Swiper>
        </div>
        
     </Div>
    )
}

export default Attraction_p

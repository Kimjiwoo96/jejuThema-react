import React from 'react'
import { useEffect, useState , useRef } from "react"
import Maintext from './Maintext'
import {tour} from '../../js/commonData'
import styleTour from '../../scss/kjw/Tour.module.scss'

function Tour() {

    return (
        <>
            {/* {
                tour.map((el,idx) => {
                    return(
                        <>
                            <div
                                className={styleTour.tourWrap}
                                style={{backgroundImage:`url(${el["올레"][idx].img})`}}
                            >
                                <Maintext
                                    title="투어경로 추천"
                                    subTitle="색다른 여행을 계획하세요."
                                ></Maintext>
                            </div>
                            
                        </>
                    )
                })
            } */}
            
        </>
    )
}

export default Tour

import React from 'react'
import { useEffect, useState , useRef } from "react"
import Maintext from "../component/kjw/Maintext"
import Tour from '../component/kjw/Tour'


function Tour_p() {
    return (
        <>
            <Maintext
                title="투어경로 추천"
                subTitle="색다른 여행을 계획하세요."
            ></Maintext>
            
            <Tour></Tour>

        
        </>
    )
}

export default Tour_p

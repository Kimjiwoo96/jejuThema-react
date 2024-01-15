import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerObj } from '../../js/banner';
import MainStyle from '../../scss/bine/Main.module.scss';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Apply from './Apply';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Main() {

  return (
    <div className={MainStyle.banner} >

      <Swiper
        className='position-relative h-100'
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{
          clickable: true,
          el: ".pagination"
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}

      >
        {
          bannerObj.map((el) => {
            return (
              <SwiperSlide className={MainStyle.bannerSlide} key={el.id}>
                <div className={MainStyle.bgcontent} style={{
                  backgroundImage: `url(${el.image}) `

                }}>
                  <div className={`${MainStyle.content} position-absolute container mx-auto text-center text-lg-start`}>
                    <h2>{el.title}</h2>
                    <p>{el.txt}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className={`${MainStyle.btn} position-absolute container d-flex`}>
          <div className="pagination"></div>
          <div className='d-lg-flex d-none'>
            <button className='button-prev-slide'><BsChevronLeft /></button>
            <button className='button-next-slide'><BsChevronRight /></button>
          </div>
        </div>

      </Swiper>

      <Apply />

    </div>
  )
}

export default Main;
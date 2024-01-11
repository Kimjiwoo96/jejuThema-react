import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerObj } from '../../js/banner';
import MainStyle from '../../scss/bine/Main.module.scss';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Main() {

  return (
    <div className={MainStyle.banner} >

      <Swiper
        className='position-relative'
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
                <div>
                  <img src={el.image} alt={el.title} />
                  <div className={`${MainStyle.content} position-absolute container `}>
                    <h2>{el.title}</h2>
                    <p>{el.txt}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className={`${MainStyle.btn}  position-absolute container d-flex`}>
          <div className="pagination"></div>
          <button className='button-prev-slide btn-light'><BsChevronLeft /></button>
          <button className='button-next-slide'><BsChevronRight /></button>
        </div>

      </Swiper>



    </div>
  )
}

export default Main;
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerObj } from '../../js/banner';
import MainStyle from '../../scss/bine/Main.module.scss';


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
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}

      >
        {
          bannerObj.map((el, idx) => {
            return (
              <SwiperSlide className={MainStyle.bannerSlide} key={idx}>
                <div>
                  <img src={el.image} alt={el.title} />
                  <div>
                    <h2>{el.title}</h2>
                    <p>{el.txt}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })

        }
      </Swiper>



    </div>
  )
}

export default Main;
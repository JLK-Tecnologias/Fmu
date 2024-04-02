'use client'
import React, { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Adm from '../../public/Administração.jpg'
import Tec from '../../public/Tecnologia.jpg'
import Eng from '../../public/EngenhariaCivil.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';



import { Pagination } from 'swiper/modules';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use([EffectCoverflow]);

import styles from "./Wanted.module.css"
import Container from './Container';
import classNames from 'classnames';




export default function Wanted() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const resizeHandler = () => {
      if (swiper) {
        const slides = swiper.slides;

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transition = '';
          slides[i].style.transform = '';
        }

        const centerSlideIndex = swiper.activeIndex;

        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i];
          const offset = Math.abs(i - centerSlideIndex);
          const scale = offset === 0 ? 1 : 0.9; // Slide central ligeiramente maior
          const translate = (i - centerSlideIndex) ;

          slide.style.transition = 'transform 0.3s';
          slide.style.transform = `translateX(${translate}%) scale(${scale})`;
        }
      }
    };

    swiper.on('slideChange', resizeHandler);

    return () => {
      swiper.off('slideChange', resizeHandler);
    };
  }, []);


  return (
    <section className={styles.wanted}>
      <Container>
        <Swiper
          initialSlide={1}
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Pagination]}
          pagination={{clickable: true,}}
          className={classNames('myswiper', styles.Swiper)}
          style={{
            "--swiper-pagination-color": "red",
            "--swiper-pagination-bullet-inactive-opacity": "0.1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "0px",
            
      
        }}
        >
          <SwiperSlide className={styles.SwiperSlide}>
             <div className={styles.imageContainer}>
                <Image src={Adm} alt=''></Image>
                <h1 className={styles.text}>Administração</h1>
                <a href="#" className={styles.button}>SAIBA MAIS</a>
             </div>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.imageContainer}>
               <Image src={Tec} alt=''></Image>
               <h1 className={styles.text}>Tecnologia</h1>
               <a href="#" className={styles.button}>SAIBA MAIS</a>
            </div>
         </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.imageContainer}>
               <Image src={Eng} alt=''></Image>
               <h1 className={styles.text}>Engenharia Civil</h1>
               <a href="#" className={styles.button}>SAIBA MAIS</a>
             </div>
          </SwiperSlide>
          {/* <SwiperSlide className={styles.SwiperSlide}>Slide 4</SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>Slide 4</SwiperSlide> */}
        </Swiper>
      </Container>
      
    </section>
  );
}

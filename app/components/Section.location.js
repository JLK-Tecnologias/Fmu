'use client'
import React, {useRef, useState} from 'react'
import styles from './Location.module.css'
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Cravinhos from '@/public/cravinhos.png'
import Container from './Container';


export default function Location() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  }
  const goToSlide = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setCurrentSlide(index);
  };
  return (
    <section className={styles.location} id='location'>
      <div className={styles.nav}>
          <button className={currentSlide === 0 ? styles.active : ''} onClick={() => goToSlide(0)}>Cravinhos</button>
          <button className={currentSlide === 1 ? styles.active : ''} onClick={() => goToSlide(1)}>Mongagua</button>     
          <button className={currentSlide === 2 ? styles.active : ''} onClick={() => goToSlide(2)}>Peruibe</button>
          <button className={currentSlide === 3 ? styles.active : ''} onClick={() => goToSlide(3)}>São Vicente</button>
          <button className={currentSlide === 4 ? styles.active : ''} onClick={() => goToSlide(4)}>Itanhaém</button>     
      </div>
      <Container>
        <div className={styles.box}>
          <Swiper
             ref={swiperRef}
             className={classNames('myswiper', styles.Swiper)}
             onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          >
            <SwiperSlide className={styles.SwiperSlide}>
              <h1>Cravinhos - Sp</h1>
              <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
              <Image src={Cravinhos} alt=''></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h1>Mongaguá - Sp</h1>
              <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
              <Image src={Cravinhos} alt=''></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h1>Peruíbe - Sp</h1>
              <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
              <Image src={Cravinhos} alt=''></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h1>São Vicente - Sp</h1>
              <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
              <Image src={Cravinhos} alt=''></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.SwiperSlide}>
              <h1>Itanhaém - Sp</h1>
              <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
              <Image src={Cravinhos} alt=''></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

    </section>
  )
}

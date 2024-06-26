"use client";
import React, { useRef, useState } from "react";
import styles from "./Location.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Especialista from "@/public/especialista.jpg";
import Fmuimg2 from "@/public/FmuImg2.png";
import Fmuimg3 from "@/public/FmuImg3.png";
import Fmuimg4 from "@/public/FmuImg4.png";
import Confuso from "@/public/Confuso.png";

import Image from "next/image";

import Container from "./Container";

export default function Location() {
  // const swiperRef = useRef(null);
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handleSlideChange = (index) => {
  //   setCurrentSlide(index);
  // }
  // const goToSlide = (index) => {
  //   swiperRef.current.swiper.slideTo(index);
  //   setCurrentSlide(index);
  // };
  return (
    // <section className={styles.location} id='location'>
    //   <div className={styles.nav}>
    //       <button className={currentSlide === 0 ? styles.active : ''} onClick={() => goToSlide(0)}>Cravinhos</button>
    //       <button className={currentSlide === 1 ? styles.active : ''} onClick={() => goToSlide(1)}>Mongagua</button>
    //       <button className={currentSlide === 2 ? styles.active : ''} onClick={() => goToSlide(2)}>Peruibe</button>
    //       <button className={currentSlide === 3 ? styles.active : ''} onClick={() => goToSlide(3)}>São Vicente</button>
    //       <button className={currentSlide === 4 ? styles.active : ''} onClick={() => goToSlide(4)}>Itanhaém</button>
    //   </div>
    //   <Container>
    //     <div className={styles.box}>
    //       <Swiper
    //          ref={swiperRef}
    //          className={classNames('myswiper', styles.Swiper)}
    //          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
    //       >
    //         <SwiperSlide className={styles.SwiperSlide}>
    //           <h1>Cravinhos - Sp</h1>
    //           <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
    //           <Image src={Fmuimg1} alt='' loading="lazy"></Image>
    //         </SwiperSlide>
    //         <SwiperSlide className={styles.SwiperSlide}>
    //           <h1>Mongaguá - Sp</h1>
    //           <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
    //           <Image src={Fmuimg2} alt='' loading="lazy"></Image>
    //         </SwiperSlide>
    //         <SwiperSlide className={styles.SwiperSlide}>
    //           <h1>Peruíbe - Sp</h1>
    //           <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
    //           <Image src={Fmuimg3} alt='' loading="lazy"></Image>
    //         </SwiperSlide>
    //         <SwiperSlide className={styles.SwiperSlide}>
    //           <h1>São Vicente - Sp</h1>
    //           <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
    //           <Image src={Fmuimg4} alt='' loading="lazy"></Image>
    //         </SwiperSlide>
    //         <SwiperSlide className={styles.SwiperSlide}>
    //           <h1>Itanhaém - Sp</h1>
    //           <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'>Saiba Mais</a>
    //           <Image src={Fmuimg2} alt='' loading="lazy"></Image>
    //         </SwiperSlide>
    //       </Swiper>
    //     </div>
    //   </Container>
    // </section>

    <section className={styles.Container}>
      <section className={styles.location}>
        <div className={styles.title}>
          <h1>Centenas de opções de Pós-Graduação e MBA!</h1>
        </div>
        <Container>
          {/* <div className={styles.divh2}><h2>Clique no Botão abaixo:</h2></div> */}
          <div className={styles.nav}>
            
            <a className={styles.sub} href="https://wa.me/5513998025801?text=Ol%C3%A1%2C+Quero+saber+mais+sobre+p%C3%B3s-Gradua%C3%A7%C3%A3o+e+MBA."  target='_blank'>Saiba mais!</a>
          </div>
        </Container>
      </section>  
      
     
    </section>
  );
}

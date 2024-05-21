"use client";
import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Adm from "@/public/Administração.png";
import Tec from "@/public/Tecnologia.png";
import Eng from "@/public/EngenhariaCivil.png";
import Direto from "@/public/direito.png";
import Ped from "@/public/Pedagogia.png";
import Graduation from "@/public/graduation.png";
import Student from "@/public/student.png";
import Reading from "@/public/readingbook.png";
import Group from "@/public/group.png";
import fisica from "@/public/educacaofisica.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper/modules";

import styles from "./Wanted.module.css";
import Container from "./Container";
import classNames from "classnames";
import Popup from "./Popup";

export default function Wanted() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const resizeHandler = () => {
      if (swiper) {
        const slides = swiper.slides;

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transition = "";
          slides[i].style.transform = "";
        }

        const centerSlideIndex = swiper.activeIndex;

        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i];
          const offset = Math.abs(i - centerSlideIndex);
          const scale = offset === 0 ? 1 : 0.9; // Slide central ligeiramente maior
          const translate = i - centerSlideIndex;

          slide.style.transition = "transform 0.3s";
          slide.style.transform = `translateX(${translate}%) scale(${scale})`;
        }
      }
    };

    swiper.on("slideChange", resizeHandler);

    return () => {
      swiper.off("slideChange", resizeHandler);
    };
  }, []);

  return (
    <section className={styles.wanted}>
      <div className={styles.title}>
        <Image src={Graduation} className={styles.icon} alt="" />
        <Image src={Student} className={styles.icon} alt="" />
        <h1>Quero ser FMU</h1>
        <Image src={Reading} className={styles.icon} alt="" />
        <Image src={Group} className={styles.icon} alt="" />
      </div>

      <Container>
        <Swiper
          initialSlide={2}
          centeredSlides={true}
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={classNames("myswiper", styles.Swiper)}
          style={{
            "--swiper-pagination-color": "red",
            "--swiper-pagination-bullet-inactive-opacity": "0.1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "0px",
          }}
        >
          <SwiperSlide className={styles.SwiperSlide}>
            <Image src={Direto} alt=""></Image>
            <h1 className={styles.text}>Administração</h1>
            <a className={styles.button} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+tudo+bem%3F+Queria+saber+mais+sobre+o+curso+de+Administração." target="_blank">
              INSCREVA-SE
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>
            <Image src={Tec} alt=""></Image>
            <h1 className={styles.text}>Tecnologia</h1>
            <a className={styles.button} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+tudo+bem%3F+Queria+saber+mais+sobre+o+curso+de+Tecnologia." target="_blank">
              INSCREVA-SE
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>
            <Image src={Eng} alt=""></Image>
            <h1 className={styles.text}>Engenharia</h1>
            <a className={styles.button} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+tudo+bem%3F+Queria+saber+mais+sobre+o+curso+de+Engenharia." target="_blank">
              INSCREVA-SE
            </a>
          </SwiperSlide>
          {/* <SwiperSlide className={styles.SwiperSlide}>
            <Image src={Direto} alt=""></Image>
            <h1 className={styles.text}>Educação fisíca</h1>
            <a className={styles.button} onClick={handlePopupToggle}>
            INSCREVA-SE
            </a>
          </SwiperSlide> */}
          <SwiperSlide className={styles.SwiperSlide}>
            <Image src={Ped} alt=""></Image>
            <h1 className={styles.text}>Pedagogia</h1>
            <a className={styles.button} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+tudo+bem%3F+Queria+saber+mais+sobre+o+curso+de+Pedagogia." target="_blank">
              INSCREVA-SE
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide}>
            <Image src={fisica} alt=""></Image>
            <h1 className={styles.text}>Educação Física</h1>
            <a className={styles.button} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+tudo+bem%3F+Queria+saber+mais+sobre+o+curso+de+Educação+Física." target="_blank">
              INSCREVA-SE
            </a>
          </SwiperSlide>
        </Swiper>

        {/* {showPopup && <Popup handlePopupToggle={handlePopupToggle} />} */}
      </Container>
      <div>
          <div className={styles.divEscolha}>
            <h1>
              Escolha a sua cidade e inscreva-se.
            </h1>
          </div>
          <div className={styles.nav}>
            <a href="https://inscricoes.fmu.br?ag=545830182" target="_blank">
              Cravinhos - SP
            </a>
            <a href="https://inscricoes.fmu.br?ag=377805459" target="_blank">
              São Vicente - SP
            </a>
            <a href="https://inscricoes.fmu.br?ag=309117593" target="_blank">
              Mongaguá - SP
            </a>
            <a href="https://inscricoes.fmu.br?ag=470467970" target="_blank">
              Peruibe - SP
            </a>
          </div>
        </div>
    </section>
  );
}

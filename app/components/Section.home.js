"use client";
import React, { useState } from "react";
import styles from './Home.module.css'
import Image from 'next/image'
import IconWhats from '../../public/whats.svg'
import IconFace from '../../public/face.svg'
import IconInsta from '../../public/insta.svg'
import Container from './Container'
import Popup from "./Popup";


export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className={styles.Home} id='home'>
      <Container>
        <div className={styles.text}>
          <h1>Faculdade 100% online para você estudar onde e quando quiser!</h1>
          <span>Inscreva-se no botão abaixo:</span>
          <br/>
          <a className={styles.sub} href="https://wa.me/5513998025801?text=Ol%C3%A1%2C+Tudo+bem%3F+Estou+interessado+em+obter+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+oferecidos+pela+faculdade.+Poderia+me+ajudar%3F+%F0%9F%8E%93" target="_blank">INSCREVA-SE!</a>
          <br/>
          <div className={styles.socials}>
            <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'><Image src={IconWhats} alt='' className={styles.icon}/></a>
            <a href="https://www.facebook.com/share/9vTNcqYxLShMAVDS/?mibextid=qi2Omg"  target='blank'><Image src={IconFace} alt='' className={styles.icon}/></a>
            <a href="https://www.instagram.com/fmupolos.ondalitoral/" target='blank'><Image src={IconInsta} alt='' className={styles.icon}/></a>
          </div>
        </div>
        {showPopup && <Popup handlePopupToggle={handlePopupToggle} />}
      </Container>
    </section>
  )
}

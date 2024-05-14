'use client'
import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import classNames from 'classnames'
import Popup from "./Popup";

export default function Header() {
  const [open, setOpen] = useState(false)

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };


  return (
    <header className={classNames(styles.Header, { [styles.fixed]: open })}>
      <div className={styles.container}>
        <div className={styles.logo}><Image src={Logo} alt='Logo' className={styles.img}></Image></div>

        <nav className={classNames(styles.nav, { [styles.display]: !open })}>
          <ul>
            <li><a href="#home" onClick={()=>setOpen(!open)}>Início</a></li>
            <li><a href="#free" onClick={()=>setOpen(!open)}>Cursos</a></li>
            <li><a href="#location" onClick={()=>setOpen(!open)}>Polos</a></li>
            <li><a href="#footer" onClick={()=>setOpen(!open)}>Contato</a></li>
          </ul>
         <a className={styles.sub} href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+Tudo+bem%3F+Estou+interessado+em+obter+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+oferecidos+pela+faculdade.+Poderia+me+ajudar%3F+%F0%9F%8E%93" target="_blank">INSCREVA-SE!</a>
        </nav> 
        
        

        <div className={styles.mobilehamburguer}>
          <label className={styles.mobileIcon} htmlFor="check">
            <input type="checkbox" checked={open} onChange={()=>setOpen(!open)} id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      {showPopup && <Popup handlePopupToggle={handlePopupToggle} />}
    </header>
  )
}

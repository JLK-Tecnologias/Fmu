'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'
import Logo from '../../public/Logo.png'
import Image from 'next/image'
import classNames from 'classnames'
export default function Header() {
  const [open, setOpen] = useState(false)
  const checkboxRef = useRef(null);


  function isopen() {
    if (!open) {
      setOpen(true)
      checkboxRef.current.checked = true
    }
    else {
      setOpen(false);
      checkboxRef.current.checked = false
    }
  }

  return (
    <header className={classNames(styles.Header, { [styles.fixed]: open })}>
      <div className={styles.container}>
        <div className={styles.logo}><Image src={Logo} alt='Logo' className={styles.img}></Image></div>

        <nav className={classNames(styles.nav, { [styles.display]: !open })}>
          <ul>
            <li><a href="#home" onClick={isopen}>Início</a></li>
            <li><a href="#free" onClick={isopen}>Cursos</a></li>
            <li><a href="#location" onClick={isopen}>Polos</a></li>
            <li><a href="#footer" onClick={isopen}>Contato</a></li>
          </ul>
          <a className={styles.sub}>Inscreva-se</a>
        </nav>

        <div className={styles.mobilehamburguer}>
          <label className={styles.mobileIcon} htmlFor="check">
            <input ref={checkboxRef} type="checkbox" onChange={isopen} id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  )
}

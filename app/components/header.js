'use client'
import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import classNames from 'classnames'
export default function Header() {
  const [open, setOpen] = useState(false)


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
          <a className={styles.sub}>Inscreva-se</a>
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
    </header>
  )
}

import React from 'react'
import styles from './Home.module.css'
import Image from 'next/image'
import IconWhats from '../../public/whats.svg'
import IconFace from '../../public/face.svg'
import IconInsta from '../../public/insta.svg'
import Container from './Container'

export default function Home() {
  return (
    <section className={styles.Home} id='home'>
      <Container>
        <div className={styles.text}>
          <h1>Expandindo horizontes com <br/>
            educação a distância.</h1>
          <span>Descubra novos caminhos para o sucesso com FMU EAD Polos.</span>
          <br/>
          <a href="" className={styles.sub}>Saiba mais!</a>
          <br/>
          <div className={styles.socials}>
            <a href=""><Image src={IconWhats} alt='' className={styles.icon}/></a>
            <a href=""><Image src={IconFace} alt='' className={styles.icon}/></a>
            <a href=""><Image src={IconInsta} alt='' className={styles.icon}/></a>
          </div>
        </div>
      </Container>
    </section>
  )
}

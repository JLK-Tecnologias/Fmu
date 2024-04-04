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
            <a href="https://wa.me/5513996198792?text=Ol%C3%A1%2C%20Eu%20queria%20saber%20mais%20sobre%20as%20gradua%C3%A7%C3%B5es." target='blank'><Image src={IconWhats} alt='' className={styles.icon}/></a>
            <a href="https://www.instagram.com/fmu_francodarocha/"  target='blank'><Image src={IconFace} alt='' className={styles.icon}/></a>
            <a href="https://www.facebook.com/fmu.francodarocha/" target='blank'><Image src={IconInsta} alt='' className={styles.icon}/></a>
          </div>
        </div>
      </Container>
    </section>
  )
}

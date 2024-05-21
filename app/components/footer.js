import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoLitoral.png'
import QrLogo from '../../public/qrcode.png'
import LogoFooter from '../../public/LogoFooter.png'
import Container from './Container'
import IconWhats from '../../public/whats.svg'
import IconFace from '../../public/face.svg'
import IconInsta from '../../public/insta.svg'

export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
      <Container>
        <div className={styles.footerbox}>
          <div className={styles.logo}>
            <div className={styles.logodiv}>
              <Image src={QrLogo} alt='' className={styles.img}></Image>
              <Image src={LogoFooter} alt='' className={styles.img}></Image>
            </div>
          <div>
            <Image src={Logo} alt='' className={styles.img_logo} />
          </div>
          
          </div>
          <div className={styles.box}>
            <div>
              <h3>ENDEREÇOS</h3>
              <span>São Vicente - SP</span> <br />
              <span>Cravinhos - SP</span> <br />
              <span>Mongaguá - SP</span> <br />
              <span>Peruíbe - SP</span> <br />
              <span>Itanhaém - SP</span>
              
            </div>
            <div>
              <h3>CONTATO</h3>
              <span>Tel: (13) 99802-5801 </span>
            </div>
            <div>
              <h3>REDE SOCIAIS</h3>
              <div>
                <a href="https://api.whatsapp.com/send/?phone=5513998025801&text=Olá%2C+Eu+queria+saber+mais+sobre+as+graduações.&type=phone_number&app_absent=0" target='blank'><Image src={IconWhats} alt='' className={styles.icon}/></a>
                <a href="https://www.instagram.com/fmu_francodarocha/"  target='blank'><Image src={IconFace} alt='' className={styles.icon}/></a>
                <a href="https://www.facebook.com/fmu.francodarocha/" target='blank'><Image src={IconInsta} alt='' className={styles.icon}/></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.faixa}><span>@todos os direitos reservados</span></div>
    </footer>

  )
}

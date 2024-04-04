import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoLitoral.png'
import QrLogo from '../../public/selo55anos_rodape.webp'
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
            <Image src={Logo} alt='' className={styles.img} />
            <Image src={QrLogo} alt='' className={styles.img}></Image>
          </div>
          <div className={styles.box}>
            <div>
              <h3>ENDEREÇO</h3>
              <span>R. Basílio Fazzi, 64, Sala 01 - Companhia Fazenda Belém, Franco da Rocha - SP</span>
            </div>
            <div>
              <h3>CONTATO</h3>
              <span>Tel: (11) 91705-4616 <br/>Email: franco1358.ead@fmu.br</span>
            </div>
            <div>
              <h3>REDE SOCIAIS</h3>
              <div>
                <a href="https://wa.me/5513996198792?text=Ol%C3%A1%2C%20Eu%20queria%20saber%20mais%20sobre%20as%20gradua%C3%A7%C3%B5es." target='blank'><Image src={IconWhats} alt='' className={styles.icon}/></a>
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

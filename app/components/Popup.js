'use client'
import styles from './Popup.module.css'
import Container from "./Container";

export default function Popup({ handlePopupToggle }) {
  return (
    <Container>
      <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <button className={styles.close} onClick={handlePopupToggle}>
          &times;
        </button>
        <h3>Escolha seu campo</h3>
        <a className={styles.alink} href="https://inscricoes.fmu.br?ag=545830182" target="_blank">
          Cravinhos - SP
        </a>
        <a className={styles.alink} href="https://inscricoes.fmu.br?ag=377805459" target="_blank" >
          São Vicente - SP
        </a>
        <a className={styles.alink} href="https://inscricoes.fmu.br?ag=309117593" target="_blank">
          Mongaguá - SP
        </a>
        <a className={styles.alink} href="https://inscricoes.fmu.br?ag=470467970" target="_blank">
          Peruibe - SP
        </a>
      </div>
    </div>
    </Container>
   
  );
}

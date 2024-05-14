"use client";
import Container from "./Container";
import Confuso from "@/public/Confuso.png";
import Image from "next/image";
import styles from "./NotFind.module.css";

export default function SectionNotFind() {
  return (
    <Container>
      <section className={styles.Section}>
        <div>
          <div>
            <h1>
              Não achou o curso que procurava? <br /> Clique no botão abaixo
            </h1>
          </div>

          <div>
            <a href="https://wa.me/5513996198792?text=Ol%C3%A1%2C+n%C3%A3o+encontrei+o+curso+que+eu+estava+procurando.+Poderia+por+gentileza+me+ajudar%3F" className={styles.sub}>
              Clique aqui
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={Confuso} alt="" loading="lazy"></Image>
        </div>
      </section>
    </Container>
  );
}

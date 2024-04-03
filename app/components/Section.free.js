import React from 'react'
import styles from './Free.module.css'
import Container from './Container'
export default function Free() {
  return (
    <section className={styles.free} id='free'>
      <div className={styles.title}>
        <h1>Cursos disponíveis</h1>
      </div>
      <Container>
        <div className={styles.curses}>
          <div className={styles.single}>
            <h1>Bacharelado</h1>
            <a href="">○ ADMINISTRAÇÃO</a>
            <a href="">○ MATEMÁTICA</a>
            <a href="">○ CIÊNCIA DA COMPUTAÇÃO</a>
            <a href="">○ CIÊNCIAS CONTÁBEIS</a>
            <a href="">○ CIÊNCIAS ECONÔMICAS</a>
            <a href="">○ DESIGN DE ANIMAÇÃO</a>
            <a href="">○ DESIGN DE GAMES</a>
            <a href="">○ ENGENHARIA CIVIL</a>
            <a href="">○ ENGENHARIA DA COMPUTAÇÃO</a>
            <a href="">○ ENGENHARIA DE CONTROLE</a>
            <a href="">○ AUTOMAÇÃO</a>
            <a href="">○ ENGENHARIA DE PRODUÇÃO</a>
            <a href="">○ ENGENHARIA ELÉTRICA</a>
            <a href="">○ ENGENHARIA MECÂNICA</a>
            <a href="">○ ESTATÍSTICA</a>
            <a href="">○ SECRETARIADO EXECUTIVO</a>
            <a href="">○ SISTEMAS DE INFORMAÇÃO</a>
          </div>
          <div className={styles.single}>
            <h1>Licenciatura</h1>
            <a href="">○ ARTES VISUAIS</a>
            <a href="">○ HISTÓRIA</a>
            <a href="">○ LETRAS</a>
            <a href="">○ CIÊNCIAS BIOLÓGICAS</a>
            <a href="">○ CIÊNCIAS SOCIAIS</a>
            <a href="">○ GEOGRAFIA</a>
            <a href="">○ LETRAS - INGLÊS</a>
            <a href="">○ MATEMÁTICA</a>
            <a href="">○ PEDAGOGIA</a>
            <a href="">○ EDUCAÇÃO FÍSICA</a>
          
            <h1>Tecnologo</h1>
            <a href="">○ ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</a>
            <a href="">○ DESIGN DE INTERIORES</a>
            <a href="">○ GASTRONOMIA</a>
            <a href="">○ GESTÃO DE RECURSOS HUMANOS</a>
            <a href="">○ CIÊNCIAS SOCIAIS</a>
            <a href="">○ MARKETING DIGITAL</a>
            <a href="">○ SERVIÇOS JUDICIAIS</a>
          </div>
          <div className={styles.single}>
            <h1>Pós-graduação</h1>
            <a href="">○ ALFABETIZAÇÃO E LETRAMENTO</a>
            <a href="">○ APRENDIZAGEM E INOVAÇÃO</a>
            <a href="">○ BIG DATA E COMUNICAÇÃO</a>
            <a href="">○ BUSINESS INTELLIGENCE E ANALYTICS</a>
            <a href="">○ COORDENAÇÃO PEDAGÓGICA</a>
            <a href="">○ DESENVOLVIMENTO DE SOFTWARE COM METODOLOGIAS ÁGEIS</a>
            <a href="">○ DIREITO CIVIL</a>
            <a href="">○ DIREITO DIGITAL</a>
            <a href="">○ EDUCAÇÃO INFANTIL</a>
            <a href="">○ GESTÃO DE E-COMMERCE</a>
            <a href="">○ GESTÃO EM ENFERMAGEM</a>
            <a href="">○ MBA EM FINANÇAS E BANKING</a>
            <a href="">○ MBA EM GESTÃO DE MARCAS</a>
            <a href="">○ MBA EM LOGÍSTICA E SUPPLY CHAIN MANAGEMENT</a>
            <a href="">○ MBA EM LOGÍSTICA EMPRESARIAL</a>
            <a href="">○ MBA EM SERVIÇOS DE SAÚDE</a>
            <a href="">○ MBA EM TENDÊNCIAS E INOVAÇÕES</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

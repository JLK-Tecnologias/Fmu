import React from "react";
import styles from "./Free.module.css";
import Container from "./Container";
export default function Free() {
  return (
    <section className={styles.free} id="free">
      <div className={styles.title}>
        <h1>Cursos disponíveis</h1>
      </div>
      <Container>
        <div className={styles.curses}>
          <div className={styles.single}>
            <h1>Graduações</h1>
            <h3>Ciências da saúde:</h3>
            <ul>
              <li>COMUNICAÇÃO E MARKETING</li>
              <li>COMUNICAÇÃO INSTITUCIONAL</li>
              <li>JORNALISMO</li>
              <li>PRODUÇÃO AUDIOVISUAL</li>
              <li>PRODUÇÃO MULTIMÍDIA</li>
              <li>PUBLICIDADE E PROPAGANDA</li>
              <li>RELAÇÕES PÚBLICAS</li>
              <li>MARKETING DIGITAL</li>
              <li>TECNOLOGIA EM PRODUÇÃO PUBLICITÁRIA</li>
              <li>PRODUÇÃO MULTIMÍDIA EM REALIDADE VIRTUAL AUMENTADA</li>
              <li>TECNOLOGIA EM FOTOGRAFIA</li>
            </ul>
            <h3>Direito e relações:</h3>
            <ul>
              <li>SEGURANÇA PÚBLICA</li>
              <li>MEDIAÇÃO</li>
              <li>SEGURANÇA PRIVADA</li>
              <li>SERVIÇOS JUDICIAIS</li>
              <li>SERVIÇOS REGISTRAIS E NOTARIAIS</li>
              <li>SERVIÇOS PENAIS</li>
            </ul>
            <h3>Arte, Design e Moda:</h3>
            <ul>
              <li>ARTES VISUAIS (LICENCIATURA)</li>
              <li>DESIGN</li>
              <li>DESIGN DE ANIMAÇÃO</li>
              <li>DESIGN DE GAMES</li>
              <li>DESIGN DE PRODUTO</li>
              <li>TECNOLOGIA EM DESIGN GRÁFICO</li>
              <li>MODA</li>
              <li>PRODUÇÃO CULTURAL</li>
            </ul>
          </div>
          <div className={styles.single}>
            <h3>Educação:</h3>
            <ul>
              <li>CIÊNCIAS SOCIAIS (LICENCIATURA)</li>
              <li>MATEMÁTICA (LICENCIATURA)</li>
              <li>GEOGRAFIA</li>
              <li>HISTÓRIA</li>
              <li>LETRAS U+002d INGLÊS</li>
              <li>LETRAS U+002d PORTUGUÊS</li>
              <li>PEDAGOGIA</li>
            </ul>
            <ul>
              <li>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</li>
              <li>BIG DATA E INTELIGÊNCIA ANALÍTICA</li>
              <li>CIÊNCIA DA COMPUTAÇÃO</li>
              <li>BLOCKCHAIN E CRIPTOGRAFIA DIGITAL</li>
              <li>ENGENHARIA CIVIL</li>
              <li>ENGENHARIA DA COMPUTAÇÃO</li>
              <li>ENGENHARIA DA PRODUÇÃO</li>
              <li>ENGENHARIA DE CONTROLE E AUTOMAÇÃO</li>
              <li>ENGENHARIA ELÉTRICA</li>
              <li>ENGENHARIA MECÂNICA</li>
              <li>ESTATÍSTICA</li>
              <li>INTERNET DAS COISAS E COMPUTAÇÃO EM NUVEM</li>
              <li>JOGOS DIGITAIS</li>
              <li>GESTÃO AMBIENTAL</li>
              <li>GESTÃO DA PRODUÇÃO INDUSTRIAL</li>
              <li>GESTÃO DA TECNOLOGIA DA INFORMAÇÃO</li>
              <li>GESTÃO DE AGRONEGÓCIO</li>
              <li>REDES DE COMPUTADORES</li>
              <li>SEGURANÇA DA INFORMAÇÃO</li>
              <li>MATEMÁTICA (BACHARELADO)</li>
              <li>SISTEMAS DE INFORMAÇÃO</li>
              <li>SISTEMAS PARA INTERNET (DESENVOLVIMENTO MOBILE)</li>
              <li>DESIGN DE INTERIORES</li>
            </ul>

            {/* <a href="">○ ARTES VISUAIS</a>
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
            <a href="">○ SERVIÇOS JUDICIAIS</a> */}
          </div>
          <div className={styles.single}>
            <h3>Hospitalidade e Gastronomia:</h3>
            <ul>
              <li>EVENTOS</li>
              <li>GASTRONOMIA</li>
              <li>HOTELARIA</li>
            </ul>

            <h3>Negócios:</h3>
            <ul>
              <li>ADMINISTRAÇÃO</li>
              <li>CIÊNCIAS CONTÁBEIS</li>
              <li>CIÊNCIAS ECONÔMICAS</li>
              <li>COMÉRCIO EXTERIOR</li>
              <li>GESTÃO COMERCIAL</li>
              <li>GESTÃO DA INOVAÇÃO E EMPREENDEDORISMO DIGITAL</li>
              <li>GESTÃO DA QUALIDADE</li>
              <li>GESTÃO DE NEGÓCIOS DIGITAIS</li>
              <li>GESTÃO DE RECURSOS HUMANOS</li>
              <li>GESTÃO DO TURISMO</li>
              <li>GESTÃO FINANCEIRA</li>
              <li>GESTÃO HOSPITALAR</li>
              <li>GESTÃO PÚBLICA</li>
              <li>LOGÍSTICA</li>
              <li>MARKETING</li>
              <li>NEGÓCIOS IMOBILIÁRIOS</li>
              <li>PROCESSOS GERENCIAIS</li>
              <li>SECRETARIADO EXECUTIVO</li>
            </ul>

            
            {/* <a href="">○ ALFABETIZAÇÃO E LETRAMENTO</a>
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
            <a href="">○ MBA EM TENDÊNCIAS E INOVAÇÕES</a> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

import styles from "./page.module.css";

import Home from "./components/Section.home";
import Wanted from "./components/Section.most-wanted";
import Free from "./components/Section.free";
// import Study from "./components/Section.why-study";
import Location from "./components/Section.location";
import SectionNotFind from "./components/SectionNotFind";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
          <Home/>
          <Wanted/>
          <Free/>
          {/* <Study/> */}
          <Location/>
        <SectionNotFind></SectionNotFind>
      </main>
      <Footer></Footer>
    </>
  );
}

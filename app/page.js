import styles from "./page.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/Section.home";
import Wanted from "./components/Section.most-wanted";
import Free from "./components/Section.free";
// import Study from "./components/Section.why-study";
import Location from "./components/Section.location";


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
      </main>
      <Footer></Footer>
    </>
  );
}

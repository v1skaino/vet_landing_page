import { About } from "../../components/about";
import { Adoption } from "../../components/adoption";
import { Carousel } from "../../components/carousel";
import { Links } from "../../components/links";
import { Main } from "../../components/main";
import { Servicos } from "../../components/servicos";
import { SubInfo } from "../../components/subInfo";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.mainContent}>
      <Main />
      <SubInfo />
      <Links />
      <Carousel />
      <Servicos />
      <About />
      <Adoption />
    </main>
  );
};

export default Home;

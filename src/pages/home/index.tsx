import { Carousel } from "../../components/carousel";
import { Links } from "../../components/links";
import { Main } from "../../components/main";
import { SubInfo } from "../../components/subInfo";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.mainContent}>
      <Main />
      <SubInfo />
      <Links />
      <Carousel />
    </main>
  );
};

export default Home;

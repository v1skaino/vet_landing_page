import { Carousel } from "../../components/carousel";
import { Main } from "../../components/main";
import { SubInfo } from "../../components/subInfo";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.mainContent}>
      <Main />
      <SubInfo />
      <Carousel />
    </main>
  );
};

export default Home;

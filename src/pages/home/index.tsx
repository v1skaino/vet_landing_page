import { Main } from "../../components/main";
import { SubInfo } from "../../components/subInfo";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.mainContent}>
      <Main />
      <SubInfo />
    </main>
  );
};

export default Home;

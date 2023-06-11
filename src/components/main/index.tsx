import Logo from "../../assets/logo_blue.jpeg";
import Pets from "../../assets/pets.png";
import styles from "./styles.module.scss";
export const Main = () => {
  return (
    <section className={styles.container}>
      <nav>
        <img src={Logo} alt="Logo" />
      </nav>
      <section className={styles.mainInfo}>
        <div />
        <div className={styles.label}>
          <h1>Veterinária Natália Viscaino</h1>
          <p>Amor, cuidado e saúde para seus melhores amigos!</p>
          <button> Saiba mais &#x2192;</button>
        </div>
        <img src={Pets} alt="Pets Logo" />
      </section>
    </section>
  );
};

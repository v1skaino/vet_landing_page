import Adote from "../../assets/adote.jpg";
import AnjosProtetores from "../../assets/adote.png";
import Servicos from "../../assets/servicos.jpg";
import Sobre from "../../assets/sobre.jpg";
import styles from "./styles.module.scss";
export const Links = () => {
  return (
    <div className={styles.container}>
      <article
        className={styles.card}
        style={{ backgroundImage: `url(${Servicos})` }}
      >
        <div>
          <p>
            <span>- -</span> INFO <span>- -</span>
          </p>
          <h3>Serviços</h3>
        </div>
      </article>
      <article
        style={{ backgroundImage: `url(${Sobre})` }}
        className={styles.card}
      >
        <div>
          <p>
            <span>- -</span> INFO <span>- -</span>
          </p>
          <h3>Sobre</h3>
        </div>
      </article>
      <article
        style={{ backgroundImage: `url(${Adote})` }}
        className={styles.card}
      >
        <img src={AnjosProtetores} alt="Logo anjos e protetos" />
        <div>
          <p>
            <span>- -</span> INFO <span>- -</span>
          </p>
          <h3>Adoção</h3>
        </div>
      </article>
    </div>
  );
};

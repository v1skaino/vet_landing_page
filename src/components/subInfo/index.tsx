import DogWithGlasses from "../../assets/dog_glasses.png";
import styles from "./styles.module.scss";
export const SubInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Qualidade & Excelência</h2>
        <p>
          Seja bem-vindo(a) ao meu website! Como uma veterinária dedicada e
          apaixonada, tenho o compromisso de oferecer um serviço de qualidade
          excepcional a todos os animais e seus tutores. Com vasta experiência e
          conhecimento atualizado, estou empenhada em proporcionar cuidados
          abrangentes, diagnósticos precisos e tratamentos eficazes para
          garantir a saúde e o bem-estar dos seus amados companheiros peludos.
          Com uma abordagem gentil e compassiva, estabeleço uma relação de
          confiança com meus pacientes e seus tutores, priorizando sempre seu
          conforto e segurança. Estou ansiosa para ajudá-lo(a) a cuidar do seu
          animal de estimação de forma cuidadosa e profissional.
        </p>
      </div>
      <a href="#" className={styles.imageContainer}>
        <img src={DogWithGlasses} alt="Cachorro com óculos" />
        <span>
          Agende uma consulta veterinária hoje mesmo e proporcione o melhor
          cuidado para o seu pet!
        </span>
      </a>
    </section>
  );
};

import Natalia from "../../assets/natalia_sobre.jpg";
import styles from "./style.module.scss";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Sobre</h2>
        <p>
          Olá! Eu sou a Dra. Natalia, uma veterinária apaixonada pelos animais e
          comprometida em oferecer o melhor cuidado possível a cada paciente de
          quatro patas que cruza o meu caminho. Desde jovem, minha conexão com
          os animais era inegável. Acompanhava fascinada os documentários sobre
          a vida selvagem, e meu coração se enchia de alegria sempre que
          encontrava um novo amigo peludo. Essa paixão me guiou na escolha de me
          tornar uma veterinária. Após anos de dedicação aos estudos, formei-me
          com excelência em Medicina Veterinária, adquirindo conhecimentos
          teóricos e práticos essenciais para o cuidado dos animais. Minha
          formação foi enriquecida com estágios em diferentes clínicas e
          hospitais veterinários, onde tive a oportunidade de aprender com
          profissionais experientes e me aprimorar em diversas áreas da medicina
          veterinária. Ao longo da minha jornada profissional, tive o privilégio
          de conhecer animais incríveis e suas histórias de superação. Cada
          consulta, cirurgia e tratamento foi uma oportunidade de aprender e
          fazer a diferença na vida desses seres tão especiais. Como uma
          veterinária mulher, sinto uma conexão profunda com meus pacientes e
          seus tutores. Acredito que é essencial oferecer um ambiente acolhedor
          e empático, onde todos se sintam ouvidos e compreendidos. Meu objetivo
          é proporcionar um atendimento personalizado, baseado no respeito,
          cuidado e amor pelos animais. Estou animada em compartilhar minha
          expertise e conhecimentos para ajudar você a cuidar do seu amado
          animal de estimação. Conte comigo para oferecer o cuidado e a atenção
          que eles merecem. Juntos, podemos garantir uma vida saudável e feliz
          para seus companheiros peludos.
        </p>
      </div>
      <a href="#" className={styles.imageContainer}>
        <img src={Natalia} alt="Foto de formatura" />
        <span>
          Agende uma consulta veterinária hoje mesmo e proporcione o melhor
          cuidado para o seu pet!
        </span>
      </a>
    </section>
  );
};

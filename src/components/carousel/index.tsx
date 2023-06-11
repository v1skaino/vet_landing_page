import AliceCarousel from "react-alice-carousel";
import vetFirst from "../../assets/natalia_card_1.png";
import vetSecond from "../../assets/natalia_card_2.png";
import vetTrd from "../../assets/natalia_card_3.png";
import vetFrt from "../../assets/natalia_card_4.png";
import vetFft from "../../assets/natalia_card_5.jpg";
import { CardCarousel } from "../card/index";
import { Reveal } from "../reveal";
import styles from "./styles.module.scss";

export const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    930: { items: 3 },
    1204: { items: 4 },
  };

  const cards = [
    {
      description:
        "Trago anos de experiência especializada no cuidado de animais de estimação. Estou dedicada a oferecer atendimento compassivo e profissional para garantir a saúde e a felicidade dos seus queridos companheiros.",
      image: vetFirst,
      title: "Experiência especializada",
      id: 1,
    },
    {
      description:
        "Com uma sensibilidade inata para lidar com animais, ofereço uma abordagem gentil e acolhedora. Acredito que o bem-estar emocional dos animais é tão importante quanto seu estado físico, proporcionando um ambiente seguro e confortável durante as consultas.",
      image: vetSecond,
      title: "Abordagem sensível e gentil",
      id: 2,
    },
    {
      description:
        "Mantenho-me atualizada com os avanços da medicina veterinária, participando de cursos e conferências para oferecer os melhores tratamentos disponíveis. Meu conhecimento atualizado garante que seu animal de estimação receba os cuidados mais eficazes e baseados em evidências.",
      image: vetTrd,
      title: "Conhecimento atualizado",
      id: 3,
    },
    {
      description:
        "Valorizo a comunicação clara e transparente com os tutores, explicando detalhadamente os procedimentos, diagnósticos e opções de tratamento disponíveis. Estou sempre disponível para responder às suas perguntas e fornecer orientações para melhor cuidar do seu pet.",
      image: vetFrt,
      title: "Comunicação clara e transparente",
      id: 4,
    },
    {
      description:
        "Como uma veterinária dedicada, mantenho um compromisso inabalável com a qualidade dos serviços que ofereço. Desde exames de rotina até cirurgias complexas, estou empenhada em fornecer um padrão de excelência em cada aspecto do cuidado veterinário que presto.",
      image: vetFft,
      title: "Compromisso com a qualidade",
      id: 5,
    },
  ];

  const items = cards.map((item) => {
    return (
      <div className={styles.item}>
        <CardCarousel
          data-value={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      </div>
    );
  });

  return (
    <Reveal>
      <div className={styles.container}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite
          controlsStrategy="alternate"
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          animationType="fadeout"
        />
      </div>
    </Reveal>
  );
};

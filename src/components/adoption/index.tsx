import Anjos from "../../assets/adote.png";
import Pata from "../../assets/pata.png";
import styles from "./styles.module.scss";
export const Adoption = () => {
  const urlAnjos = "https://www.anjoseprotetores.com.br/";
  return (
    <>
      <section className={styles.container}>
        <h6>- Encontre seu melhor amigo! -</h6>
        <h2>Adote</h2>
        <img src={Pata} alt="patinha" />
        <h4>
          Adoção é um ato de <span>amor</span>
        </h4>
        <p>
          A adoção é uma forma poderosa de combater o abandono e o sofrimento
          dos animais. Ao adotar, estamos dando um exemplo de compaixão e
          responsabilidade, ajudando a reduzir o número de animais em situação
          de rua. Além disso, estamos contribuindo para promover uma cultura de
          amor e cuidado pelos animais, ensinando a importância de respeitar e
          valorizar todas as formas de vida. Ao adotar um animal, estamos
          recebendo em nossas vidas uma fonte inesgotável de alegria, lealdade e
          afeto. Os animais adotados demonstram uma gratidão única e um amor
          sincero, nos ensinando lições valiosas sobre paciência, compreensão e
          generosidade. Eles preenchem nossos dias com brincadeiras,
          companheirismo e ternura, criando laços que se tornam cada vez mais
          fortes ao longo do tempo.
        </p>
      </section>
      <section className={styles.content}>
        <a href={urlAnjos} target="__blank" className={styles.imageContainer}>
          <img src={Anjos} alt="Cachorro com óculos" />
          <span>Acesse o site! Clique aqui!</span>
        </a>
        <div className={styles.text}>
          <h2>
            Anjos e protetores<span style={{ color: "#009fe3" }}>.</span>
          </h2>
          <p>
            A ONG Anjos e Protetores é uma organização dedicada à adoção
            responsável de animais em situação de vulnerabilidade. Com uma
            equipe comprometida e apaixonada por cuidar dos animais, eles
            trabalham incansavelmente para encontrar lares amorosos para cada um
            deles. Através de campanhas de conscientização, eventos de adoção e
            parcerias com clínicas veterinárias, a Anjos e Protetores promove a
            importância da adoção e do cuidado responsável. Com sua ajuda, eles
            podem continuar resgatando e transformando vidas, unindo anjos
            protetores a animais que precisam de amor e cuidado.
          </p>
          <a href={urlAnjos} target="__blank">
            <span style={{ color: "#009fe3", cursor: "pointer" }}>
              Acesse o site
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

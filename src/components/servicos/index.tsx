import { BiPlusMedical } from "react-icons/bi";
import { BsBandaidFill, BsHouseHeartFill } from "react-icons/bs";
import { CiMedicalMask } from "react-icons/ci";
import { FaNotesMedical } from "react-icons/fa";
import { GiMedicines, GiTripleNeedle } from "react-icons/gi";
import { Reveal } from "../reveal";
import styles from "./styles.module.scss";
export const Servicos = () => {
  return (
    <Reveal>
      <div className={styles.container}>
        <h2>Serviços</h2>
        <div className={styles.services}>
          <article className={styles.article}>
            <div>
              <BsHouseHeartFill size={42} />
            </div>
            <h3>Atendimento Domiciliar</h3>
          </article>
          <article className={styles.article}>
            <div>
              <FaNotesMedical size={42} />
            </div>
            <h3>Consulta Clínica Geral</h3>
          </article>
          <article className={styles.article}>
            <div>
              <GiTripleNeedle size={42} />
            </div>
            <h3>Vacinação</h3>
          </article>
          <article className={styles.article}>
            <div>
              <BiPlusMedical size={42} />
            </div>
            <h3>Assistência Pós-Operatória</h3>
          </article>
          <article className={styles.article}>
            <div>
              <GiMedicines size={42} />
            </div>
            <h3>Exames e Medicações</h3>
          </article>
          <article className={styles.article}>
            <div>
              <BsBandaidFill size={42} />
            </div>
            <h3>Curativos</h3>
          </article>
          <article className={styles.article}>
            <div>
              <FaNotesMedical size={42} />
            </div>
            <h3>Atestado de Saúde</h3>
          </article>
          <article className={styles.article}>
            <div>
              <CiMedicalMask size={42} />
            </div>
            <h3>Cirurgia</h3>
          </article>
        </div>
      </div>
    </Reveal>
  );
};

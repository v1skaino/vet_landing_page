import styles from "./styles.module.scss";
type Props = {
  title: string;
  description: string;
  image: string;
};
export const CardCarousel = ({ description, image, title }: Props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__img}
        style={{ backgroundImage: `url(${image})` }}
      >
        {" "}
      </div>
      <div className={styles.card__descr_wrapper}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__descr}>{description}</p>
      </div>
    </div>
  );
};

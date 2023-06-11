import styles from "./styles.module.scss";
export const CardCarousel = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}></div>
      <div className={styles.card__content}>
        <p className={styles.card__title}>Card Title</p>
        <p className={styles.card__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

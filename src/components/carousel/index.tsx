import AliceCarousel from "react-alice-carousel";
import { CardCarousel } from "../card/index";
import styles from "./styles.module.scss";

export const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    930: { items: 3 },
    1204: { items: 4 },
  };

  const items = [
    <div className={styles.item}>
      <CardCarousel data-value="1" />
    </div>,
    <div className={styles.item}>
      <CardCarousel data-value="2" />
    </div>,
    <div className={styles.item}>
      <CardCarousel data-value="3" />
    </div>,
    <div className={styles.item}>
      <CardCarousel data-value="4" />
    </div>,
    <div className={styles.item}>
      <CardCarousel data-value="5" />
    </div>,
  ];

  return (
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
  );
};

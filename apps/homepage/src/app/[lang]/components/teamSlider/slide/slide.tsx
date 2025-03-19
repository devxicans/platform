import styles from "./slide.module.scss";
import Image from "next/image";

type SlideProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  skills: string[];
};

export function Slide({ image, title, description, skills }: SlideProps) {
  return (
    <div className={styles.slide}>
      <h2>
        The <span className={styles.spanText}>1x</span> Developers
      </h2>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <p>{skills.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
}

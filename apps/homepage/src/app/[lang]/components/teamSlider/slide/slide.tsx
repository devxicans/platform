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
    <div>
      <h2>
        The <span className={styles.spanText}>1x</span> Developers
      </h2>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{skills.join(" • ")}</p>
    </div>
  );
}

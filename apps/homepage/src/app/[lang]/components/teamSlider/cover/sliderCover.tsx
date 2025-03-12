import styles from "./sliderCover.module.scss";
import Image from "next/image";

type SliderCoverProps = {
  imageURL: string;
  altText: string;
};

export function SliderCover({ imageURL, altText }: SliderCoverProps) {
  return (
    <div className={styles.coverSlide}>
      <h2>
        The <span className={styles.spanText}>1x</span> Developers
      </h2>
      <div className={styles.imageWrapper}>
      <Image
          src={imageURL}
          alt={altText}
          layout="responsive"
          width={700}
          height={600}
          className={styles.coverImage}
        />
      </div>
    </div>
  );
}

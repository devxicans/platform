"use client";
import styles from "./teamSlider.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import teamData from "./teamData";
import Image from "next/image";
import { SliderCover } from "./cover/sliderCover";
import { UiIcon } from "@uireact/icons";

export function TeamSlider() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>("en");
  const [currentIndex, setCurrentIndex] = useState<number>(-1); // -1 para mostrar la portada

  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    setLocale(pathLocale);
  }, [pathname]);

  const safeLocale = locale === "es" || locale === "en" ? locale : "en";
  const team = teamData[safeLocale];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > team.length - 1 ? -1 : prevIndex + 1
    );
  };

  return (
    <div className={styles.teamSlider}>
      <div>
        {currentIndex === -1 ? (
          <div className={styles.slide}>
            <SliderCover
              imageURL="/images/team.jpg"
              altText="The 1xDevelopers team photo"
            />
            <button onClick={nextSlide} className={styles.nextButton}>
              Meet the rockstars
              <UiIcon icon="ArrowClearRight" category="tertiary" />
            </button>
          </div>
        ) : (
          <div className={styles.slide}>
            <h2>The 1xDevelopers</h2>
            <Image
              src={team[currentIndex].image}
              alt={team[currentIndex].title}
              width={100}
              height={100}
            />
            <h2>{team[currentIndex].title}</h2>
            <p>{team[currentIndex].description}</p>
            <p>{team[currentIndex].skills.join(", ")}</p>
            <button onClick={nextSlide} className={styles.nextButton}>
              Next
              <UiIcon icon="ArrowClearRight" category="tertiary" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

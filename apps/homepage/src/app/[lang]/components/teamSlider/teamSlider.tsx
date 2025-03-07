"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import teamData from "./teamData";
import Image from "next/image";

export function TeamSlider() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    setLocale(pathLocale);
  }, [pathname]);

  const safeLocale = (locale === "es" || locale === "en") ? locale : "en";
  const team = teamData[safeLocale];

  return (
    <div>
      {locale}
      {team.map((member) => (
        <div key={member.key}>
          <Image src={member.image} alt={member.title} width={100} height={100}/>
          <h2>{member.title}</h2>
          <p>{member.description}</p>
          <p>{member.skills}</p>
        </div>
      ))}
    </div>
  );
}

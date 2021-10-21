import { useRouter } from "next/router";
import React from "react";
import TeamMemberCard from "../components/Cards/TeamMemberCard";
import { activeLocale } from "../locale/translation";

export default function team() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="pt-28 pb-6 px-6 sm:px-20">
        <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
          {t.teamPage.title}
        </h1>
        <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
          {t.teamPage.description}
        </p>
      </div>
      <div className="py-8 px-6 sm:px-20 space-y-5">
        {t.teamPage.members.map((item, index) => (
          <TeamMemberCard
            name={item.name}
            functions={item.functions}
            socialLinks={item.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}

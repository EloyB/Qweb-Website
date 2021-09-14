import { useRouter } from "next/router";
import React, { useState } from "react";
import { activeLocale } from "../locale/translation";
import { BiRocket } from "react-icons/bi";
import ContactSelection from "../components/Others/ContactSelection";
import Input from "../components/Inputs/Input";
import TextArea from "../components/Inputs/TextArea";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function contact() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <div className="bg-secondary max-w-screen-xl m-auto">
        <div className="pt-36 pb-10 px-6 sm:px-20 relative z-20 space-y-8">
          <h1 className="font-extrabold text-4xl text-white mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            Let's get in touch!
          </h1>
          <div className="space-y-3">
            <h3 className="text-white text-opacity-50 text-lg font-semibold">
              What is your question about?
            </h3>
            <div className="space-y-3">
              {t.contactPage.selectionSection.map((item, index) => (
                <ContactSelection
                  index={index}
                  selectedIndex={selectedIndex}
                  icon={item.icon}
                  title={item.title}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-white text-opacity-50 text-lg font-semibold">
              Who is asking?
            </h3>
            <div className="space-y-3">
              <Input placeholder="Name" dark />
              <Input placeholder="Email" dark />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-white text-opacity-50 text-lg font-semibold">
              What is the question?
            </h3>
            <div className="space-y-3">
              <TextArea placeholder="Message" dark />
            </div>
          </div>
          <PrimaryButton
            label="Send it!"
            icon={<BiRocket className="text-white h-6 w-6" />}
          />
        </div>
      </div>
    </div>
  );
}

import TitleHeader from "../components/TitleHeader.jsx";
import { testimonials } from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t("testimonials_title")}
          sub={t("testimonials_sub")}
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ imgPath, name, mentions, review }, index) => (
            <GlowCard key={index} card={{ review: t(review) }}>
              <div className="flex items-center gap-3 mt-4">
                <div>
                  <img src={imgPath} alt={t(name)} />
                </div>
                <div>
                  <p className="font-bold">{t(name)}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

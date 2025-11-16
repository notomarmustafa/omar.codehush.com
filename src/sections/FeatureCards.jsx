import { abilities } from "../constants/index.js";
import { useTranslation } from "react-i18next";

const FeatureCards = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols gap-8">
        {abilities.map((ability) => (
          <div
            key={ability.title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={ability.imgPath} alt={t(ability.title)} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {t(ability.title)}
            </h3>
            <p className="text-white-50 text-lg">{t(ability.desc)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

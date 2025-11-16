import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const AnimatedCounter = () => {
  const { i18n, t } = useTranslation();

  // Helper function to convert numbers to Arabic numerals
  const toArabicNumbers = (num) => {
    const arabicDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return num
      .toString()
      .split("")
      .map((d) => arabicDigits[d] ?? d)
      .join("");
  };

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols gap-8">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp
                end={item.value}
                duration={2}
                formattingFn={(num) =>
                  i18n.language === "ar" ? toArabicNumbers(num) : num + item.suffix
                }
              />
            </div>
            <div className="text-white-50 text-lg">{t(item.label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

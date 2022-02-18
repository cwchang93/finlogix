import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

interface IPropsTranslation {
  title?: string;
}

const Translation: React.FC<IPropsTranslation> = () => {
  const { t, i18n } = useTranslation();

  const changeLangHandler = () => {
    const curLang = i18n.language;
    const newLang = curLang === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <h1>{t("greetings")}</h1>
      <h1>{t("test")}</h1>

      <Button onClick={changeLangHandler}>Toggle Language!</Button>
    </div>
  );
};

export default Translation;

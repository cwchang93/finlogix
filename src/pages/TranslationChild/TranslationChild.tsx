import { useTranslation } from "react-i18next";

interface ITranslationChild {
  title?: string;
}

const TranslationChild: React.FC<ITranslationChild> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>This is The title Page</h1>
      <h2>{t("welcome to React")}</h2>
    </div>
  );
};

export default TranslationChild;

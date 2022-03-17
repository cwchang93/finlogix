import { useTranslation } from "react-i18next";
import Button from "components/Button/Button";
import { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";

interface IPropsTranslation {
  title?: string;
}

const Translation: React.FC<IPropsTranslation> = () => {
  const { t, i18n } = useTranslation();

  const sectionRef = useRef<any>();

  const changeLangHandler = () => {
    const curLang = i18n.language;
    const newLang = curLang === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };

  const handleClickSection = () => {
    console.log("handleClickSection");
  };

  const data = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019",
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "HSN",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "CPX",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [70, 32, 45, 65, 87, 92, 99],
      },
      {
        label: "Total",
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
        data: [135, 91, 125, 144, 143, 143, 139],
      },
    ],
  };

  useEffect(() => {
    sectionRef.current.click();
  }, []);

  return (
    <>
      <div>
        <h1>{t("greetings")}</h1>
        <h1>{t("test")}</h1>

        <Button onClick={changeLangHandler}>Toggle Language!</Button>
      </div>

      <section ref={sectionRef} onClick={handleClickSection}>
        <div>Chart Section</div>
        <Line data={data} />
        <div></div>
      </section>
    </>
  );
};

export default Translation;

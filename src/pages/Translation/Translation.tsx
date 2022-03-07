import { useTranslation } from "react-i18next";
import Button from "components/Button/Button";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

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

  const fetchPrices = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
    const data = await res.json();
    return data;
  };

  const [chartData, setChartData] = useState({});

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

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false },
        },
      ],
    },
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgba(255,0,0, 1)", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <div>
        <h1>{t("greetings")}</h1>
        <h1>{t("test")}</h1>

        <Button onClick={changeLangHandler}>Toggle Language!</Button>
      </div>

      <section>
        <div>Chart Section</div>
        {/* {chartData && <Bar data={chartData} />} */}
        {/* <Bar
          data={{
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
              {
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        /> */}

        <Line data={data} />
        <div></div>
      </section>
    </>
  );
};

export default Translation;

import { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Translation from "./pages/Translation/Translation";
import Index from "./pages/Index/Index";
import Layout from "components/Layout/Layout";
import Header from "components/Header/Header";
import Loading from "components/Loading/Loading";
import { totalActions, IInitState } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./store/auth-actions";

import { useTranslation, initReactI18next } from "react-i18next";

import "./i18n";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state: IInitState) => state.auth);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="App">
      <Layout maxWidth="1180px">
        <Header
          logoSrc="https://acy.com/images/common/logo.svg"
          auth={auth}
          onLogout={handleLogout}
        />
        {/* <Loading visible={true} /> */}

        <Route path="/" exact>
          <Index />
        </Route>

        <Route path="/login">{auth ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">
          <Register />
        </Route>
        <Route path="/translation">
          <Suspense fallback={<Loading />}>
            <Translation />
          </Suspense>
        </Route>
      </Layout>
    </div>
  );
}

export default App;

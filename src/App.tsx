import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registered from "./pages/Registered/Registered";
import Index from "./pages/Index/Index";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { totalActions, IInitState } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./store/auth-actions";

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

        <Route path="/Registered">
          <Registered />
        </Route>
      </Layout>
    </div>
  );
}

export default App;

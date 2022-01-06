import { totalActions, IActionTypes } from "./index";
import { setCookie, getCookie } from "../utils/getCookie";

interface IAuthLogin {
  type: IActionTypes["login"];
  payload: Object[];
}
interface IAuthLogout {
  type: IActionTypes["logout"];
  payload: undefined;
}

export const fetchUserData = (email: string, password: string) => {
  return async (dispatch: (arg: IAuthLogin) => IAuthLogin) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REQUEST_URL}/auth/email/login`,
        {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch User data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const user = await fetchData();
      dispatch(totalActions.login(user.user));
      //   console.log("user", user);
      setCookie("access_token", user.token, 3600 * 24);
    } catch (error) {
      console.log("err", error);
    }
  };
};

export const userLogout = () => {
  return async (dispatch: (arg: IAuthLogout) => IAuthLogout) => {
    const logoutUser = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REQUEST_URL}/auth/logout`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Logout Fail!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const user = await logoutUser();
      dispatch(totalActions.logout());
      setCookie(`access_token`, "", 0);
    } catch (error) {
      console.log("err", error);
    }
  };
};

export const checkUser = () => {
  return async (dispatch: (arg: IAuthLogin) => IAuthLogin) => {
    const response = await fetch(
      `${process.env.REACT_APP_REQUEST_URL}/auth/me`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Get User Fail!");
    }
    const data = await response.json();

    dispatch(totalActions.login(data.user));
    return data;
  };
};

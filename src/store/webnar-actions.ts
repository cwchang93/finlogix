import { totalActions, IActionTypes } from "./index";

interface IWebinar {
  type: IActionTypes["setWebinarLists"];
  payload: Object[];
}

export const fetchWebinarData = (pageNum: number = 12) => {
  return async (dispatch: (arg: IWebinar) => IWebinar) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REQUEST_URL}/posts?per_page=${pageNum}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch WebinarData data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const webinarData = await fetchData();
      dispatch(totalActions.setWebinarLists(webinarData.data));
    } catch (error) {
      console.log("err", error);
    }
  };
};

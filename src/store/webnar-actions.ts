import { totalActions, IInitState, IActionTypes } from "./index";

// `${process.env.REACT_APP_REQUEST_URL}/posts?favourited=1&author=${userId}`,   favourite posts


interface IWebinar {
  type: IActionTypes['setWebinarLists'],
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
      console.log("res", response);

      if (!response.ok) {
        throw new Error("Could not fetch WebinarData data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const webinarData = await fetchData();
      console.log("webinarData", webinarData.data);
      dispatch(totalActions.setWebinarLists(webinarData.data));
    } catch (error) {
      console.log("err", error);
      // dispatch(
      //     uiActions.showNotification({
      //         status: 'error',
      //         title: 'Error!',
      //         message: 'Fetching cart data failed!',
      //     })
      // );
    }
  };
};

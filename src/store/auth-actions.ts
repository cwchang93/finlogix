import { totalActions, IInitState } from './index';
import { setCookie, getCookie } from '../utils/getCookie';

export const fetchUserData = (email: string, password: string) => {

    return async (dispatch: any) => {
        // return async (dispatch: (arg: IInitState) => IInitState) => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_REQUEST_URL}/auth/email/login`
                , {
                    headers: {
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({ email, password })
                });
            console.log('res', response);

            if (!response.ok) {
                throw new Error('Could not fetch User data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const user = await fetchData();
            dispatch(totalActions.login(user.user));
            console.log('us', user);
            setCookie('access_token', user.token, 3600 * 24);

        } catch (error) {
            console.log('err', error);
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


export const userLogout = () => {
    return async (dispatch: any) => {
        // return async (dispatch: (arg: IInitState) => IInitState) => {
        const logoutUser = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_REQUEST_URL}/auth/logout`
                , {
                    headers: {
                        'content-type': 'application/json',
                        Authorization: `Bearer ${getCookie('access_token')}`,
                    },
                    method: 'POST',
                });

            if (!response.ok) {
                throw new Error('Logout Fail!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const user = await logoutUser();
            dispatch(totalActions.logout());
            setCookie(`access_token`, '', 0);
        } catch (error) {
            console.log('err', error);
        }
    };
}

export const checkUser = () => {
    return async (dispatch: any) => {
        const response = await fetch(
            `${process.env.REACT_APP_REQUEST_URL}/auth/me`
            , {
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${getCookie('access_token')}`,
                },
                method: 'POST',
            });

        if (!response.ok) {
            throw new Error('Get User Fail!');
        }
        const data = await response.json();

        console.log('me', data.user);
        dispatch(totalActions.login(data.user));
        return data;
    }
}
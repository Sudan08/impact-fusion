


// export const googleAuthenticate = (state : string, code : string) async => {
//     if (state && code && !localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         };

//         const details = {
//             'state': state,
//             'code': code
//         };

//         const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`, config);

//             dispatch({
//                 payload: res.data
//             });

//             dispatch(load_user());
//         } catch (err) {
//             dispatch({
//                 type: GOOGLE_AUTH_FAIL
//             });
//         }
//     }
// };

// export const facebookAuthenticate = (state, code) => async dispatch => {
//     if (state && code && !localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         };

//         const details = {
//             'state': state,
//             'code': code
//         };

//         const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?${formBody}`, config);

//             dispatch({
//                 type: FACEBOOK_AUTH_SUCCESS,
//                 payload: res.data
//             });

//             dispatch(load_user());
//         } catch (err) {
//             dispatch({
//                 type: FACEBOOK_AUTH_FAIL
//             });
//         }
//     }
// };

// export const checkAuthenticated = () => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }; 

//         const body = JSON.stringify({ token: localStorage.getItem('access') });

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

//             if (res.data.code !== 'token_not_valid') {
//                 dispatch({
//                     type: AUTHENTICATED_SUCCESS
//                 });
//             } else {
//                 dispatch({
//                     type: AUTHENTICATED_FAIL
//                 });
//             }
//         } catch (err) {
//             dispatch({
//                 type: AUTHENTICATED_FAIL
//             });
//         }

//     } else {
//         dispatch({
//             type: AUTHENTICATED_FAIL
//         });
//     }
// };

// export const login = (email, password) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ email, password });

//     try {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         });

//         dispatch(load_user());
//     } catch (err) {
//         dispatch({
//             type: LOGIN_FAIL
//         })
//     }
// };

// export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ first_name, last_name, email, password, re_password });

//     try {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);

//         dispatch({
//             type: SIGNUP_SUCCESS,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: SIGNUP_FAIL
//         })
//     }
// };

// export const verify = (uid, token) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ uid, token });

//     try {
//         await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);

//         dispatch({
//             type: ACTIVATION_SUCCESS,
//         });
//     } catch (err) {
//         dispatch({
//             type: ACTIVATION_FAIL
//         })
//     }
// };

// export const reset_password = (email) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ email });

//     try {
//         await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);

//         dispatch({
//             type: PASSWORD_RESET_SUCCESS
//         });
//     } catch (err) {
//         dispatch({
//             type: PASSWORD_RESET_FAIL
//         });
//     }
// };

// export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ uid, token, new_password, re_new_password });

//     try {
//         await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

//         dispatch({
//             type: PASSWORD_RESET_CONFIRM_SUCCESS
//         });
//     } catch (err) {
//         dispatch({
//             type: PASSWORD_RESET_CONFIRM_FAIL
//         });
//     }
// };

// export const logout = () => dispatch => {
//     dispatch({
//         type: LOGOUT
//     });
// };
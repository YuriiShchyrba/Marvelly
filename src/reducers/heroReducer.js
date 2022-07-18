import axios from "axios";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GETME = 'GETME';
const SIGNIN = 'SIGNIN';
// const SETUSERDATA = 'SETUSERDATA';


export const login = (data) => ({ type: LOGIN, data });
export const logout = () => ({ type: LOGOUT });
export const getMe = (data) => ({ type: GETME, data });
export const signIn = (data) => ({ type: SIGNIN, data });
// export const setUserData = () => ({type: SETUSERDATA,data});

// export const setUserDataThunk = () =>{
//     return (dispatch)=>{
//         axios.get('http://localhost:3000/me').then(
//             response =>{
//                 if (response.data.OK) {
//                     dispatch(getMe(response.data.me));
//                 }else{
//                     dispatch(setUserData());
//                 }
//             }
//         );
//     }
// }

export const signInThunk = (data) => {
    return (dispatch) => {
        axios.post('api/signin', data).then(
            response => {
                if (response.data.OK) {
                    dispatch(login(response.data.me));
                }
            }).catch(err => console.log('Error in signIn'));
    }
}

export const getUserData = () => {
    return (dispatch) => {
        axios.get('api/me').then(
            response => {
                if (response.data.OK) {
                    dispatch(getMe(response.data.me));
                }
            }
        ).catch(err => console.log('Error in login'));
    }
};

export const loginThunk = data => {
    return (dispatch) => {
        axios.post('api/login', data).then(
            response => {
                if (response.data.OK) {
                    dispatch(login(response.data.hero));
                }
            }
        ).catch(err => console.log('Error in login'));
    }
};

export const logoutThunk = data => {
    return (dispatch) => {
        axios.delete('api/logout/' + data).then(
            response => {
                if (response.data.OK) {
                    dispatch(logout());
                }
            }
        ).catch(err => console.log('Error in Logout'));
    }
};

const initialState = {
    login: '',
    password: '',
    fullname: '',
    age: 0,
    birthDate: '',
    powers: '',
    isAuth: false,
};

const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETME: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                fullname: action.data.fullname,
                age: action.data.age,
                birthdate: action.data.birthdate,
                powers: action.data.powers,
                isAuth: true,
            }
        };
        case LOGIN: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                fullname: action.data.fullname,
                age: action.data.age,
                birthdate: action.data.birthdate,
                powers: action.data.powers,
                isAuth: true,
            }
        };
        case LOGOUT: {
            return {
                ...state,
                login: '',
                password: '',
                fullname: '',
                age: 0,
                birthdate: '',
                powers: '',
                isAuth: false,
            }
        };
        // case SETUSERDATA:{
        //     console.log('in set user data')
        //     return state;
        // }
        default:
            return state;
    };
};

export default heroReducer;
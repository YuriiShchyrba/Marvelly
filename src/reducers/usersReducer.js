import axios from "axios";

const GETUSERS = 'GETUSERS';

export const getUsers = (data) => ({ type: GETUSERS, data });

export const getUsersThunk = (limit, page, nameStartsWith) => {
    return (dispatch) => {
        axios.get('api/getheroes').then(
            data => {
                dispatch(getUsers(data.data))
            }
        ).catch(err => {
            console.log(err);
        });
    }
};

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETUSERS: {
            return {
                ...state,
                users: [...action.data]
            }
        }
        default:
            return state;
    };
};

export default usersReducer;
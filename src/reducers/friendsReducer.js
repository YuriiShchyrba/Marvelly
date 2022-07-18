import axios from "axios";

const GETFRIENDS = 'GETFRIENDS';

const getFriends = (friends) => ({ type: GETFRIENDS, friends });

export const addFriendThunk = (yourlogin, userlogin) => {
    return (dispatch) => {
        axios.post('api/addfriend/' + yourlogin, { yourlogin, userlogin })
            .then(result => {
                if (result.data.OK) {
                    dispatch(getFriends(result.data.friends));
                }
            })
            .catch(err => console.log('Error in add friend'));
    }
}

export const deleteFriendThunk = (yourlogin, userlogin) => {
    return (dispatch) => {
        axios.delete('api/deletefriend/' + yourlogin, { data: { yourlogin, userlogin } })
            .then(result => {
                if (result.data.OK) {
                    dispatch(getFriends(result.data.friends));
                }
            })
            .catch(err => console.log('Error in add friend'));
    }
}

export const getFriendsThunk = (yourlogin) => {
    return (dispatch) => {
        axios.get('api/getfriends/' + yourlogin)
            .then(result => {
                if (result.data.OK) {
                    dispatch(getFriends(result.data.friends));
                }
            })
            .catch(err => console.log('Error in add friend'));
    }
}

const initialState = {
    friends: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETFRIENDS: {
            return {
                ...state,
                friends: [...action.friends]
            };
        };
        default:
            return state;
    };
};

export default friendsReducer;
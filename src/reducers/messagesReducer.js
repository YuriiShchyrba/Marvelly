import axios from "axios";

const GETMESSAGES = 'GETMESSAGES';
const ADDMESSAGES = 'ADDMESSAGES';


const getMessages = (messages) => ({ type: GETMESSAGES, messages });
const addMessage = (user) => ({ type: ADDMESSAGES, user });

export const addMessageThunk = (send, get, message) => {
    return (dispatch) => {
        axios.post('api/sendmessage', { send, get, message })
            .then(result => {
                if (result.data.OK) {
                    console.log('message added')
                    //dispatch(getMessages);
                    dispatch(addMessage(get));
                }
            })
            .catch(err => console.log(err));
    }
}

export const getMessagesThunk = (send, get) => {
    return (dispatch) => {
        axios.post('api/getmessage/' + send + '&' + get)
            .then(result => {
                if (result.data.OK) {
                    console.log('messages')
                    console.log(result.data)
                    //dispatch(getMessages())
                }
            })
            .catch(err => console.log(err));
    }
}

const initialState = {
    messages: [],
    lastSend: '',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDMESSAGES: {
            return {
                ...state,
                lastSend: action.user
            };
        };
        case GETMESSAGES: {
            return {
                ...state,
                messages: action.messages
            };
        };
        default: {
            return state;
        }
    }
};

export default messagesReducer;
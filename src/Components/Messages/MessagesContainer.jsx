import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import {getMessagesThunk, addMessageThunk} from "../../reducers/messagesReducer";
import MessageForm from "./MessageForm";


class MessagesContainer extends React.Component {

    render() {
        return (
            <div>
                <Messages />
                <MessageForm />
            </div>
        );
    }
};


export default connect(null,null)(MessagesContainer);
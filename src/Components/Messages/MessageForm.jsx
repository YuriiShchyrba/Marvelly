import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

let MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Message"} name={"message"} component={"input"} type='text'></Field>
            </div>
            <button type="submit">Send message</button>
        </form>
    );
};

const MessageFormRedux = reduxForm({
    form: 'message'
})(MessageForm);

const MessageF = (props) =>{
    const onSubmit = (formData)=>{
    };

    return (
        <MessageFormRedux onSubmit={onSubmit}/>
    );
}



export default withRouter(connect(null, null)(MessageF));
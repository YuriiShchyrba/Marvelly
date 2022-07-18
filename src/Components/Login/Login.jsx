import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../reducers/heroReducer";
import { Field, reduxForm } from "redux-form";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} type='text'></Field>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} type='password'></Field>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) =>{
    const onSubmit = (formData)=>{
        props.loginThunk(formData);
    };

    return (
        <LoginFormRedux onSubmit={onSubmit}/>
    );
}



export default connect(null, {loginThunk})(Login);


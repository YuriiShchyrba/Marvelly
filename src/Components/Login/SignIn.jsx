import React from "react";
import { connect } from "react-redux";
import { signInThunk } from "../../reducers/heroReducer";
import { Field, reduxForm } from "redux-form";

let SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} type='text'></Field>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} type='password'></Field>
            </div>
            <div>
                <Field placeholder={"Full Name"} name={"fullname"} component={"input"} type='text'></Field>
            </div>
            <div>
                <Field placeholder={"Date of birth"} name={"birthdate"} component={"input"} type='text'></Field>
            </div>
            <div>
                <Field placeholder={"Your powers"} name={"powers"} component={"input"} type='text'></Field>
            </div>
            <button type="submit">Create account</button>
        </form>
    );
};

const SignInFormRedux = reduxForm({
    form: 'signin'
})(SignInForm);

const SignIn = (props) =>{
    const onSubmit = (formData)=>{
        props.signInThunk(formData);
    };

    return (
        <SignInFormRedux onSubmit={onSubmit}/>
    );
}


export default connect(null, {signInThunk})(SignIn);
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

let SpecificHeroForm = (props) => {
    return (
        <form className="specificform" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Name"} name={"name"} component={"input"} type='text'></Field>
            </div>
            <button type="submit">Filter</button>
        </form>
    );
};

const SpecificHeroFormRedux = reduxForm({
    form: 'specifichero'
})(SpecificHeroForm);

const SpecificHero = (props) =>{
    const onSubmit = (formData)=>{
        props.getCharactersThunk(20,1,formData.name);
    };

    return (
        <SpecificHeroFormRedux onSubmit={onSubmit}/>
    );
}



export default SpecificHero;
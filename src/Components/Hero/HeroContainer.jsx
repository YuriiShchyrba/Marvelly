import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../../reducers/heroReducer";
import Hero from "./Hero";

class HeroContainer extends React.Component {

    componentDidMount(){
        this.props.getUserData();
    }

    render() {
        return (
            <div className="hero">
                <Hero userData = {this.props.hero}/>
            </div>
        );

    }


};

const mapStateToProps = state => ({
    hero: state.hero
});

export default connect(mapStateToProps, { getUserData })(HeroContainer);


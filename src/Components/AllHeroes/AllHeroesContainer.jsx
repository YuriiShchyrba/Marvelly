import React from "react";
import { connect } from "react-redux";
import {getCharactersThunk} from "../../reducers/marvelReducer";
import AllHeroes from "./AllHeroes";
import SpecificHero from "./SpecificHeroForm";


class ALLHeroesContainer extends React.Component {

    componentDidMount(){
        this.props.getCharactersThunk();
    }

    render() {
        const links = [];
        for( let i = 1; i <= 20; i++) links.push(<li key={i}><button type="button" onClick={()=>this.props.getCharactersThunk(20,i)}>{i}</button></li>)
        return (
            <div>
                <SpecificHero getCharactersThunk = {this.props.getCharactersThunk}/>
                <ul className="allheroescontainer">
                    {links}
                </ul>
                <AllHeroes allHeroes={this.props.allHeroes}/>
            </div>
        );

    }


};

const mapStateToProps = state => ({
    allHeroes: state.marvel.characters
});

export default connect(mapStateToProps, { getCharactersThunk })(ALLHeroesContainer);

import React from "react";
import { connect } from "react-redux";
import Login from "./Login/Login";
import { logoutThunk, getUserData } from "../reducers/heroReducer";
import HeroContainer from "./Hero/HeroContainer";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SignIn from "./Login/SignIn";
import MessagesContainer from "./Messages/MessagesContainer";
import {getCharactersThunk} from "../reducers/marvelReducer";
import AllHeroesContainer from "./AllHeroes/AllHeroesContainer";
import AllUsersContainer from "./Users/AllUsersContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import s1 from '../assets/st1.png';
import s2 from '../assets/st2.png';
import iron from "../assets/iron.png";

class MainContainer extends React.Component {

    componentDidMount(){
        this.props.getUserData();
    }

    onCheck = () =>{
        this.props.getCharactersThunk();
    }

    render() {
        if (!this.props.isAuth) return(
            <div className="login_sign_form">
                <img className="st2" src={s2}/>
                <Login />
                <SignIn />
                <img src={s1}/>
            </div>
        ); 
        return (
            <div className="main">
                <img src={iron} alt="" className="iron" />
                <button className="logout" onClick={() => {
                    this.props.logoutThunk(this.props.login);
                }}>Logout</button>
                <NavBar />
                <Switch>
                    <Route path="/profile" render={()=> <HeroContainer />}/>
                    <Route path="/messages/:send?/:get?" render={()=> <MessagesContainer/>}/>
                    <Route path="/friends" render={()=> <FriendsContainer/>}/>
                    <Route path="/allheroes" render={()=> <AllHeroesContainer/>}/>
                    <Route path="/allusers" render={()=> <AllUsersContainer/>}/>
                </Switch>
            </div>
        );
    }
};

let mapStateToProps = (state) => ({
    isAuth: state.hero.isAuth,
    login: state.hero.login
});


export default withRouter(connect(mapStateToProps, { logoutThunk, getUserData, getCharactersThunk })(MainContainer));
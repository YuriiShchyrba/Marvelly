import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import {getFriendsThunk} from "../../reducers/friendsReducer";

class FriendsContainer extends React.Component {

    componentDidMount(){
        this.props.getFriendsThunk(this.props.yourlogin);
    }

    render() {
        
        return (
            <div className="friendcontainer">
                <Friends friends = {this.props.friends} yourlogin={this.props.yourlogin}/>
            </div>
        );

    }


};

const mapStateToProps = state => ({
   friends: state.friends.friends,
   yourlogin : state.hero.login
});

export default connect(mapStateToProps, {getFriendsThunk})(FriendsContainer);

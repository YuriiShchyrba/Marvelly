import React from "react";
import { connect } from "react-redux";
import AllUsers from "./AllUsers";
import {getUsersThunk} from "../../reducers/usersReducer";
import {addFriendThunk, getFriendsThunk,deleteFriendThunk} from "../../reducers/friendsReducer";

class AllUsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUsersThunk();
        this.props.getFriendsThunk(this.props.yourlogin);
    }

    render() {
        return (
            <div className="alluserscontainer">
                <AllUsers friends = {this.props.friends} users = {this.props.users} yourlogin={this.props.yourlogin} deleteFriendThunk ={this.props.deleteFriendThunk} addFriendThunk = {this.props.addFriendThunk}/>
            </div>
        );

    }


};

const mapStateToProps = state => ({
    users: state.users.users,
    yourlogin : state.hero.login,
    friends: state.friends.friends
});

export default connect(mapStateToProps, {getUsersThunk,addFriendThunk,getFriendsThunk,deleteFriendThunk})(AllUsersContainer);

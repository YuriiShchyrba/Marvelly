import React from "react";
import MainContainer from "./Components/mainContainer";

window.fbAsyncInit = function () {
    FB.init({
        appId: '705155927559990',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
    });

    FB.AppEvents.logPageView();
    FB.getLoginStatus(function (response) {
        checker(response);
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function checker(response) {
    console.log('ok we are in checker')
    console.log(response.status)
    if (response.status === 'not_authorized') {
        FB.login();
    }
}
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        console.log(response);
    });
}

class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (<div className="app">
            {/* <div className="fb-login-button" data-size="medium" data-auto-login-link="true" data-onlogin="checkLoginState();"></div> */}
            <div className="logo">MARVEL</div>
            <MainContainer />
            <div className="footer">©2022 MARVEL</div>
        </div>);
    }
};

export default App;

import React, { Component } from 'react';
import { Login } from '../Login/Login'

class Home extends Component {
    getExpiryDate() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return JSON.stringify(new Date(expiresAt));
    }

    login = () => {
        this.props.auth.popUpLogin();
    };

    showLocklogin = () => {
        const { isAuthenticated } = this.props.auth;

        if (isAuthenticated()) { return; }
        this.props.lock.login();
    };

    componentDidMount = () => {
        this.showLocklogin();
    };

    componentDidUpdate = () => {
        this.showLocklogin();
    };

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                {isAuthenticated() &&
                <div>
                    <h4>You are logged in!</h4>
                    <h3>About Your Access Token</h3>
                    <p>
                        Your <code>access_token</code> has an expiry date of:{' '}
                        {this.getExpiryDate()}
                    </p>
                    <p>
                        The token has been scheduled for renewal, but you can also renew it manually from the navbar
                        if you don't want to wait. This manual renewal button is really
                        just for demonstration and you probably won't want such a control
                        in your actual application.
                    </p>
                </div>}
                {!isAuthenticated() &&
                    <div>
                        <h4>
                            You are not logged in! Please{' '}
                            <a style={{ cursor: 'pointer' }} onClick={this.login}>
                                Log In
                            </a>{' '}
                            to continue.
                        </h4>
                        <div className="form-container">
                            <Login auth={this.props.auth} />
                            <div className="col-xs-6">
                                <div id="lock-form" />
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Home;

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {ClientConsumer} from '../providers/clientProvider'

class LoginForm extends Component {

    submit(login, userName) {
        login(userName, "");
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="LoginForm">
                <h1>Login</h1>
                <ClientConsumer>
                    {({isLogged, login}) => (
                        <form onSubmit={(e) => this.submit(login, e.target.elements.username.value)}>
                            <label>Username</label>
                            <br></br>
                            <input name="username" type="text"/>
                            <br></br>
                            <label>Password</label>
                            <br></br>
                            <input name="password" type="password"/>
                            <br></br>
                            <input type="submit" value="Accept">
                            </input>
                        </form>
                    )}
                </ClientConsumer>
            </div>
        );
    }
}

export default withRouter(LoginForm);

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {ChatProviderClass} from "./chatProvider";

const ClientContext = React.createContext();

export class ClientProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
            userName: '',
            userPicture: ''
        }
    }

    login = (username, password) => {
        setTimeout(() => {
            this.setState({
                isLogged: true,
                userName: username,
                userPicture: 'https://image.flaticon.com/icons/png/512/147/147144.png'
            })
        }, 0);
    };

    logout = () => {
        this.setState({
            isLogged: false,
            userName: '',
            userPicture: ''
        });
        window.location.href = "./";
    };

    render(){

        const {children} = this.props;
        return (
            <ClientContext.Provider
            value = {{
                isLogged: this.state.isLogged,
                logout: this.logout,
                login : this.login,
                userName : this.state.userName,
                userPicture : this.state.userPicture,
            }}
            >
                {children}
            </ClientContext.Provider>
        )
    }
}

export const ClientConsumer = ClientContext.Consumer;
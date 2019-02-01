import React, {Component, Fragment} from 'react';
import './App.css';
import {ClientConsumer, ClientProvider} from './providers/clientProvider'
import {ChatProvider} from './providers/chatProvider'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ClientProvider>
                        <ChatProvider>
                            <Route path="/login" component={LoginForm}/>
                            <Route path="/chat" component={Chat}/>
                            <Header>
                                <ClientConsumer>
                                    {({isLogged}) => (
                                        <Fragment>
                                            {!isLogged && <Link to={"/login"}>Login now</Link>}
                                            {isLogged && <Link to={"/chat"}>Acceder au chat en ligne</Link>}
                                        </Fragment>
                                    )}
                                </ClientConsumer>
                            </Header>
                        </ChatProvider>
                    </ClientProvider>
                </div>
            </Router>
        );
    }
}

export default App;

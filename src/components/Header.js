import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'
import {ChatConsumer} from '../providers/chatProvider'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ChatConsumer>
                    {({messagesSeen}) => (
                        <div className="msgnonlu">
                            Nombre de Message non lu : {messagesSeen}
                        </div>
                    )}
                </ChatConsumer>
                <ClientConsumer>
                    {({isLogged, login, logout, userName}) => (
                        <div>
                            {this.props.children}
                            <span>{isLogged ? 'logged!!!' : 'not logged'}</span>
                            <span>{isLogged === true && userName}</span>

                            { isLogged &&
                                <button onClick={() => isLogged && logout()}>
                                    {isLogged && 'logout'}
                                </button>
                            }



                        </div>
                    )}
                </ClientConsumer>
            </div>
        );
    }
}

export default Header;

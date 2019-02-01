import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'
import {ChatConsumer} from '../providers/chatProvider'

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    getContent(isLogged, messages, sendMessage, userName) {
        if (isLogged) {
            let messageList = messages.map((elt) => {
                return (
                    <li key={elt.id}>{elt.date}-{elt.user} : {elt.msg}</li>
                );
            });

            return (
                <div>
                    <ul>{messageList}</ul>
                    <form onSubmit={e => {
                        e.preventDefault();
                        sendMessage(e.target.elements.message.value, userName)
                    }}>
                        <input type="text" id="message" name="message" size="27"/>
                        <button type="submit" id="envoyer" value="Envoyer">
                            Envoyer
                        </button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <span>Vous devez etre connecte</span>
            )
        }
    }

    render() {
        return (
            <div className="Chat">
                <ClientConsumer>
                    {({isLogged, userName}) => (
                        <ChatConsumer>
                            {({messages, sendMessage}) => (
                                this.getContent(isLogged, messages, sendMessage, userName)
                            )}
                        </ChatConsumer>
                    )}
                </ClientConsumer>
            </div>
        );
    }
}

export default Chat;

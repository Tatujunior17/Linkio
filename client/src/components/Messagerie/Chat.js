import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './Messages';
import Input from './Input';


const Chat = ({username}) => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    useEffect( () => {
        const messageListener = msg => {
            setMessages(state => {
                const newMessages = [...state];
                newMessages.push(msg);
                return newMessages;
            })
        };

        window.socket.on('chat/message', messageListener);

        return () => {
            window.socket.off('chat/message', messageListener);
        }
    }, []);

    const messageEnvoyer = (event) => {
        event.preventDefault();

        if(message) {
            window.socket.emit('chat/addMessage', message);

            setMessage('');
        }
    };

    return (
        <div className="border border-primary">
            <h3>Messagerie</h3>
            <div className="col-md-9">
                <Messages messages={messages}/>
                <Input message={message} setMessage={setMessage} messageEnvoyer={messageEnvoyer} />
            </div>
        </div>
    );
};

export default Chat;


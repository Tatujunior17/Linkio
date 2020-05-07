import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';


const Messages = ({ messages }) => (

    <ScrollToBottom>
        {messages.map((message, i) => <div key={i}><Message message={message} /></div>)}
    </ScrollToBottom>

);

export default Messages;

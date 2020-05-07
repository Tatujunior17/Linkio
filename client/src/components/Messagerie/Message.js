import React from 'react';
import ReactEmoji from 'react-emoji';
import 'bootstrap/dist/css/bootstrap.min.css';

const Message = ({ message}) => {

    const {user, text, date} = message;

    return (

                <div className="col-md-12" >
                    <p class="font-weight-bold">{user.username} </p>
                    <div className="col-md-12">
                        <p style={{color: "black"}}>{ReactEmoji.emojify(text)}</p>
                    </div>

                </div>
    );
}

export default Message;

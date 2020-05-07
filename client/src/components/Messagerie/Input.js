import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Input = ({ setMessage, messageEnvoyer, message }) => (
    <div className="col-md-12">
        <form className="form" onSubmit={e => messageEnvoyer(e)}>
        <input className="input" type="text" placeholder="Message" value={message} onChange={({ target: { value } }) => setMessage(value)} onKeyPress={event => event.key === 'Enter' ? messageEnvoyer(event) : null}/>
        <button className="btn btn-primary" type="submit">Envoyer</button>
        </form>
    </div>
)

export default Input;

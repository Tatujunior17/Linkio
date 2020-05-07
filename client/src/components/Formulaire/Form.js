import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageFond from '../../images/fond-form.jpg';


function Form({setUsername}) {

    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        if (name.length > 2) {
            e.preventDefault();
            setUsername(name);
        }
    };

    useEffect( () => {
    if (name.length > 2) {
        setDisabled(false);
    } else {
        setDisabled(true);
    }
}, [name]);

    return (
        <div className="col-md-12" style={{backgroundImage: `url(${imageFond})`, width: '1920px', height: '1080px'}}>
            <h1>Bienvenue sur Linko.io</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <br/>
                    <h3 style={{color:'white'}}>Pseudo</h3>
                    <br/>
                    <input type="text" className="form-control"  placeholder="Enter un pseudo" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                    <button type="submit" className="btn btn-primary" disabled={disabled}>Jouer</button>
            </form>
        </div>
        );
    }
export default Form;

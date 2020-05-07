import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from '../Messagerie/Chat';
import Map from './Map';
import io from 'socket.io-client';
import {addUser} from "../../store/Store";


function Jeu({username}) {
    const dispatch = useDispatch();
    const [ loading, setLoading] = useState(true);

    useEffect(() => {

        window.socket = io('http://localhost:3000?username='+username);


        window.socket.on('connect', () => {
            setLoading(false);
        });

        window.socket.on('server/user/add', user => {
            dispatch(addUser(user));
        });


    }, []);


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (

            <div className="col-md-12">
                <div className="col-md-12">
                    <Map />
                </div>
                <div className="col-md-12">
                    <Chat username={username}/>
                </div>
            </div>

            )}
        </>
    );
}


export default Jeu;



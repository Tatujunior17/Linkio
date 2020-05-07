
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import sprite from '../../images/sprite.png'
import {moveUser} from "../../store/Store";
import {HAUTEUR_MAP, LARGEUR_MAP, TAILLE_JOUEUR} from "../Const/Taille";
import io from "socket.io-client";


/*function mapDispatchToProps(dispatch) {
    return {
        move: (direction) => {
            dispatch({ type: 'DEPLACEMENT_PLAYER', payload: direction })
        }
    }
}

//Envoie des variables au container

function mapStateToProps(state) {
    return {
        position: state.player.position
    }
}*/


function Joueurs() {
    const users = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect( () => {

            const inputListener = (e) => {
            switch (e.keyCode) {
                case 40:
                    window.socket.emit('user/move',[0, 1]);
                    break;
                case 37:
                    window.socket.emit('user/move',[-1, 0]);
                    break;
                case 39:
                    window.socket.emit('user/move',[1, 0]);
                    break;
                case 38:
                    window.socket.emit('user/move',[0, -1]);
                    break;
            }
        };

           window.socket.on('server/user/move', newPosition => {
                dispatch(moveUser(newPosition));
            });

        window.addEventListener('keydown', inputListener);

        return () =>{
            window.addEventListener('keydown', inputListener);
        }

    }, []);



    return (
        <>
            {Object.keys(users).map(id => (

                <div
                    style={{
                        position: 'relative',
                        top: users[id].position[1],
                        left: users[id].position[0],
                        backgroundImage: `url('${sprite}')`,
                        width: '40px',
                        height: '52px',
                    }}
                >&nbsp;</div>
            ))}
        </>
    )
}

export default Joueurs;

import {  useDispatch } from 'react-redux';
import { moveUser} from "../../store/Store";

import store from '../../store/Store';

/*function handleDirection(e, direction) {
    console.log(`Déplacement ${direction}!`)
    store.dispatch({ type: "DEPLACEMENT_PLAYER", payload: direction})
    e.preventDefault()
}*/


/*function handleTouche(e) {
    switch(e.touche) {
        case 40:
            handleDirection(e, 'bas')
            return
        case 37:
            handleDirection(e, 'gauche')
            return
        case 39:
            handleDirection(e, 'droit')
            return
        case 38:
            handleDirection(e, 'haut')
            return
        default:
            console.log(e.touche)
    }
}*/

export default function handleDirection(wrappedComponent) {


    return wrappedComponent
}

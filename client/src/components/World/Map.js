import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageFond from '../../images/fond-form.jpg';

import handleDirection from './Deplacement';
import Joueurs from './Joueurs';
import { HAUTEUR_MAP, LARGEUR_MAP } from '../Const/Taille';



function Map(){


    return (
        <div className="col-md-12" style={{backgroundImage: `url(${imageFond})`, width: LARGEUR_MAP, height: HAUTEUR_MAP}}>

            <Joueurs />

        </div>
    );
}
export default handleDirection(Map);

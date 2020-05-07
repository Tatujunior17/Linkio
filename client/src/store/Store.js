import { createSlice, configureStore } from '@reduxjs/toolkit';
/*import sprite from '../images/sprite.png'*/
import { TAILLE_JOUEUR, HAUTEUR_MAP, LARGEUR_MAP } from '../components/Const/Taille';

const userSlice = createSlice({
    name: 'user',
    initialState: {},

    reducers: {
        addUser : (state, action) => {
            const {id, username, position}  =action.payload;
            state[id] = {username, position};
        },

        moveUser : (state, action) => {
            const {id, newPosition}  =action.payload;
            if(newPosition)
                state[id].position = newPosition;

            }

        }

});

/* export default reducers; */

// On exporte les actions de notre slice
export const { addUser, moveUser } = userSlice.actions;

// On créer notre store et on l'export
export default configureStore({
    reducer: {
        user: userSlice.reducer
    }
});


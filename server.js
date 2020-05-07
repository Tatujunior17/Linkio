const {HAUTEUR_MAP, LARGEUR_MAP, TAILLE_JOUEUR} = require  ('./client/src/components/Const/Taille');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { connectUser, disconnectUser} = require('./Models/Users');
const { ajoutMessage } = require('./Models/Messages');

const users = [];
const messages = [];


// Tu peux créer tes routes ici si tu en as besoin, avec Socket.IO tu peux aussi mettre en place l'authentication par websocket

const router = require('./router');

app.use(cors());
app.use(router);

function limite(nouveauPosition) {
    return nouveauPosition[0] >= 0 &&
    nouveauPosition[0] <= LARGEUR_MAP - TAILLE_JOUEUR &&
    nouveauPosition[1] >= 0 &&
    nouveauPosition[1] <= HAUTEUR_MAP - TAILLE_JOUEUR
        ? nouveauPosition
        : null
}

// Tu peux également regarder express-ws qui permets d'utiliser le websocket avec Express directement.

io.on('connection', (socket) => {

        let username = socket.handshake.query.username;

        const { erreur, user } = connectUser({id: socket.id, username}, users);

        if(erreur) {
            socket.emit('error', erreur);
            return false;
        }

        users.forEach(user => {
            socket.emit('server/user/add', user);
        });

        users.push(user);

        io.emit('server/user/add', user);

        //message à tous les utilisateurs

        io.emit('chat/message', {user , text: `${user.username} nous a rejoint !`});


    socket.on('chat/addMessage', data => {
        console.log('data',data);
        const message = ajoutMessage(user);
        messages.push(message);
        io.emit('chat/message', {user, text: data, date: new Date()});
    });

    socket.on('user/move', (newPosition) => {
        const user = users.find(i => i.id === socket.id);
        newPosition[0] = user.position[0] + newPosition[0];
        newPosition[1] = user.position[1] + newPosition[1];

        newPosition = limite(newPosition);

        if(newPosition !== null){
            const index = users.findIndex(i => i.id === socket.id);
            users[index].position = newPosition;

            io.emit('server/user/move', {id: user.id, newPosition});
        }
    });

    socket.on('close', () => {
        const user = disconnectUser(socket.id, users);

        if(user) {
            io.emit('chat/message', { user , text: `${user.username} vient de nous quitter !` });
        }
    })
});

server.listen(3030, () => {
    console.log('> Server listening on localhost:3000');
});

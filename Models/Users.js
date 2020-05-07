
//Création d'un utilisateurs connectés (son identifiant et son nom)

const userSchema = {
    id : '',
    username: '',
    position: [0,0]
};

const connectUser = ({id, username}, users) => {

    let erreur;

    //ici nous regardons s'il y a déjà un utilisateur dans l'Array

    const alreadyUser = users.find((user) => user.username == username);

    //ici nous regardons si le champs est vide alors message d'erreur

    if(!username)
        erreur = 'Entrez un nom';

    //ici nous utilisons la methode alreadyUser pour afficher un message d'erreur

    if(alreadyUser)
        erreur = 'Nom déjà existant';


    //ici nous allons push dans array l'utilisateur en question

    const user = Object.assign({}, userSchema, {id, username});


    return {erreur, user};
}


//Nous enlevons utilisateur avec l'identifiant correspondant dans l'array

const disconnectUser = (id, users) => {
    const index = users.findIndex((user) => user.id === id);
    users.slice(index, 1);
}

//Nous gardons utilisateur en question avec son identifiant

const getUser = (id) => users.find((user) => user.id === id);

//Nous exportons les méthodes pour pouvoir les utiliser

module.exports = {connectUser, disconnectUser, getUser};

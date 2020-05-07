import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jeu from './components/World/Jeu';
import Form from './components/Formulaire/Form';
import {Provider} from 'react-redux';
import store from './store/Store';


function App() {

    const [ username, setUsername] = useState(null);

  return (
      <div>
          {username === null ? (
              <Form
                  username={username}
                  setUsername={setUsername}
              />
          ):(
              <>
              <Jeu username={username}/>
              </>

          )}
      </div>
  );
}

function AppContainer(){
    return(
        <Provider store={store}>
            <App/>
    </Provider>
    )
}

export default AppContainer;

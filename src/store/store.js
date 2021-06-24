import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { authReducer } from '../reducers/authReducer'
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers= combineReducers({
    auth: authReducer,
    ui: uiReducer
})
export const store=createStore(reducers,
     composeEnhancers(
         applyMiddleware(thunk)
         )
)



//export const store=createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//STORE: es mi fuente unica de informacion
// funcion store recibe mi reducer, solo recibe un reducer y genera un inconveniente
// no le puedo mandar varios reducer por defectos
//export const store=createStore(authReducer) este lo usamos solo si es 1 reducer 
// debemos tener mi funcion reducer, el store y los types que nos dicen que hacer
//necesitamos importar el store en el punto mas alto de mi app: las route principal

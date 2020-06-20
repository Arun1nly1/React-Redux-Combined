import {combineReducers} from 'redux';
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/IceCreamReducer'
import petishReducer from './Petish/PetishReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    petish   : petishReducer
})

export default rootReducer;
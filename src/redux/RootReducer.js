import {combineReducers} from 'redux';
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCream/IceCreamReducer'
import petishReducer from './Petish/PetishReducer'
import userReducer from './user/UserReducer'
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    petish   : petishReducer,
    user: userReducer
})

export default rootReducer;
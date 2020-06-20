import { BUY_PETISH }  from './PetishTypes'

const initialState ={
    numOfPetishs : 50
}
const petishReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_PETISH :return{
            ...state,
            numOfPetishs: state.numOfPetishs-1
        }
        default: return state
           
    }

}
export default petishReducer;
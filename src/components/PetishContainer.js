import React from 'react'
import { buyPetish } from '../redux'
import {connect} from 'react-redux'


const PetishContainer = (props) => {
    return (
        <div>
            <h1>Number of petish - {props.numOfPetishs}</h1>
            <button onClick={props.buyPetish}>Buy  Petish</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfPetishs : state.petish.numOfPetishs
}
}

const mapDispatchToProps = dispatch =>{
    return{
        buyPetish: () =>dispatch(buyPetish())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PetishContainer);

import React from 'react'
import { buyIceCream } from '../redux'
import {connect} from 'react-redux'


const IceCreamContainer = (props) => {
    return (
        <div>
            <h1>Number of IceCream - {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy  IceCream</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfIceCream : state.iceCream.numOfIceCreams 
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () =>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer);

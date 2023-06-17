import { HACER_REGISTRO } from "../actions/action_auth";

const EstadoIncialAuth = {
    theToken: null,
    theUserId: null
}

const ReducerOfAuth = ( estado = EstadoIncialAuth, action ) => {
    switch (action.type) {
        case HACER_REGISTRO:
            
            return { ...estado, theToken: action.token, theUserId: action.userId }
    
        default:
            return estado
    }
}

export default ReducerOfAuth
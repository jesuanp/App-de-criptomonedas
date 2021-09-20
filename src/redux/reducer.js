import { searchCoin, espesifica, copia } from './actions.js';

const initialState = {
    searchCryptos: [],
    filtrados: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case searchCoin: return {
            ...state,
            searchCryptos: action.json,
            filtrados: action.json
        }
        case espesifica: return {
            ...state,
            filtrados: state.searchCryptos.filter(e => {
                if(action.payload !== ''){
                    return e.name.includes(action.payload[0].toUpperCase()+action.payload.slice(1).toLowerCase()) || e.symbol.includes(action.payload.toLowerCase())
                } else return e
            })
        }

        default: return state
    }
}
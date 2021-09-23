import { searchCoin, espesifica, mayorMenor, menorMayor } from './actions.js';

const initialState = {
    searchCryptos: [],
    filtrados: [],
    copia: []
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
        case mayorMenor: return {
            ...state,
            copia: [...state.filtrados],
            filtrados: [],
            filtrados: state.copia.sort((a, b)=>{
                if(a.id > b.id) return 1;
                if(a.id < b.id) return -1;
                return 0;
            })
        }
        case menorMayor: return {
            ...state,
            copia: [...state.filtrados],
            filtrados: [],
            filtrados: state.copia.sort((a, b)=>{
                if(a.id > b.id) return -1;
                if(a.id < b.id) return 1;
                return 0;
            })
        }

        default: return state
    }
}
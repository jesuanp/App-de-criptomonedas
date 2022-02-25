import { searchCoin, espesifica, orderABC, stateInitial, filterByPorcentaje, filterByPrices } from './actions.js';

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

        case stateInitial: return {
            ...state,
            filtrados: state.searchCryptos
        }

        case orderABC: return {
            ...state,
            filtrados: action.arg === 'A - Z' ? action.json.sort((a, b)=>{
                if(a.id > b.id) return 1;
                if(a.id < b.id) return -1;
                return 0;
            }) : action.json.sort((a, b)=>{
                if(a.id > b.id) return -1;
                if(a.id < b.id) return 1;
                return 0;
            })
        }

        case filterByPorcentaje: return {
            ...state,
            filtrados: action.arg === 'Mayor' ? action.payload.sort((a, b) => {
                if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
                  return -1;
                }
                if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
                  return 1;
                }
                return 0;
                })
                : action.payload.sort((a, b) => {
                    if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
                    return 1;
                    }
                    if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
                    return -1;
                    }
                    return 0;
                })
        }

        case filterByPrices: return {
            ...state,
            filtrados: action.arg === 'Mayor' ? action.payload.sort((a, b) => {
                if (a.current_price > b.current_price) {
                  return -1;
                }
                if (a.current_price < b.current_price) {
                  return 1;
                }
                return 0;
                })
                : action.payload.sort((a, b) => {
                    if (a.current_price < b.current_price) {
                    return -1;
                    }
                    if (a.current_price > b.current_price) {
                    return 1;
                    }
                    return 0;
                })
        }

        default: return state
    }
}
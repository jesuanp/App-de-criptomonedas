export const searchCoin = "SEARCH_COIN";
export const espesifica = "COIN_ESPESIFICA";
export const orderABC = 'ORDENAR_DE_FORMA_ALFABETICA';
export const stateInitial = 'DEVUELVE_AL_ESTADO_INICIAL';

export function searchCoins(){
    return function(dispatch){
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1")
        .then(r => r.json())
        .then(json => {
            return dispatch({type: searchCoin, json
            })
        })
    }
}

export function coinEspesifica(coin){
    
    return {
        type: espesifica,
        payload: coin
    }
}

export function estadoInicial(){

    return {
        type: stateInitial
    }
}

export function order(arg){
    return function(dispatch){
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1")
        .then(r => r.json())
        .then(json => {
            return dispatch({
                type: orderABC,
                json,
                arg
            })
        })
    }
}
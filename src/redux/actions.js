export const searchCoin = "SEARCH_COIN";
export const espesifica = "COIN_ESPESIFICA";
export const copia = "COPIA";

export function searchCoins(){
    return function(dispatch){
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1")
            .then(r => r.json())
            .then(json => {
                dispatch({type: searchCoin, json
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
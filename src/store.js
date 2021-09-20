import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './redux/reducer'
import thunk from 'redux-thunk'

const a = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    a(applyMiddleware(thunk))
)

export default store
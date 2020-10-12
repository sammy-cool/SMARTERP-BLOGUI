import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import postReducer from '../reducers/postReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        posts: postReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configStore
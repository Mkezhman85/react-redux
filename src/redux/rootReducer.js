import {combineReducers} from 'redux'

import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'
import userReducer from './reducers/userReducer'
import todosReducer from './reducers/todosReducer'

export default combineReducers({
    counter1, 
    counter2,
    userReducer,
    todosReducer
})
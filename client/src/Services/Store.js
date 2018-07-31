import {createStore, combineReducers} from 'redux'
import Reducer from '../Reducers/Reducer'

const rootReducer = combineReducers({

	'Reducer': Reducer
})

export default createStore(rootReducer)
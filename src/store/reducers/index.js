
import { combineReducers } from 'redux'
import counter from './counter'
import list from './list'
import lang from './lang'
export default combineReducers({
	counter ,
	list,
	lang
})

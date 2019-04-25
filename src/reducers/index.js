import { combineReducers } from 'redux'
import infor from './infor'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  infor,
  visibilityFilter
})
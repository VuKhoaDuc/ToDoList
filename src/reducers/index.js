import { combineReducers } from 'redux'
import infor from './infor'
import statusInput from './statusInput'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  statusInput,
  infor,
  visibilityFilter
})
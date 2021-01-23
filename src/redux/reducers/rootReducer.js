import {combineReducers} from 'redux';
import ListPerson from './listPersonReducer'

//Combine all the sub reducers
const rootReducer = combineReducers({
  Person: ListPerson,
})

export default rootReducer;
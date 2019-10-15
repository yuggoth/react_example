import { combineReducers } from 'redux'
import tabProgressBar from './tabProgressBar'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
   tabProgressBar : tabProgressBar,
  form: reduxFormReducer
})

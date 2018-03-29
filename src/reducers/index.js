import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import farms from './solarFarmsReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  farms
});

export default rootReducer;

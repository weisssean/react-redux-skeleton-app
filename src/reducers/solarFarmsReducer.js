import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;

}

export default function solarFarmsReducer(state = initialState.farms, action) {
  switch (action.type) {
    case types.LOAD_FARMS_SUCCESS:
      return  Object.assign([],[...action.farms].sort(compare));
    case types.CREATE_FARM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.farm)
      ].sort(compare);
    case types.UPDATE_FARM_SUCCESS:
      return [
        ...state.filter(farm => farm.id !== action.farm.id),
        Object.assign({}, action.farm)
      ].sort(compare);
    default:
      return state.sort(compare);
  }
}

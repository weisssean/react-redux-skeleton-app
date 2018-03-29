import * as types from "./actionTypes";
import farmsApi from "../api/FarmsApi";
import {beginAjaxCall} from "./ajaxStatusActions";


export function loadFarmSuccess(farms) {
  return {type: types.LOAD_FARMS_SUCCESS, farms};
}

export function createFarmSuccess(farm) {
  return {type: types.CREATE_FARM_SUCCESS, farm};
}

export function updateFarmSuccess(farm) {
  return {type: types.UPDATE_FARM_SUCCESS, farm};
}

export function selectFarmSuccess(farm) {
  return {type: types.SELECT_FARM_SUCCESS, farm};
}

export function selectFarmError() {
  return {type: types.SELECT_FARM_ERROR};
}


export function ajaxCallSuccess() {
  return {type: types.AJAX_CALL_SUCCESS};
}

export function loadFarms() {

  return function (dispatch) {
    dispatch(beginAjaxCall());

    return farmsApi.getAllFarms().then(farms => {
      dispatch(loadFarmSuccess(farms));
    }).catch(error => {
      throw(error);
    });
  };
}


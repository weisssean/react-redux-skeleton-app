import {expect} from 'chai';
import {createStore} from "redux";
import rootReducer from "../reducers";
import * as farmActions from "../actions/solarFarmActions";
import initialState from "../reducers/initialState";

describe('Redux Store', () => {
  it('should handle creating farms', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const farm = {id: 6, name: "skeleton-farm"};
    const action = farmActions.createFarmSuccess(farm);

    store.dispatch(action);

    //assert
    const actual = store.getState().farms[0];
    const expected = {id: 6, name: "skeleton-farm"};
    expect(actual.id).to.equal(expected.id);
    expect(actual.name).to.equal(expected.name);
  });
});

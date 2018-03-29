import React from "react";
import "../css/style.css";

import configureStore from "../store/configureStore.dev";
import {Provider} from "react-redux";
import {loadFarms} from "../actions/solarFarmActions";

import routes from "../../tools/routes";
import PropTypes from "prop-types";

const store = configureStore();

store.dispatch(loadFarms());

class Application extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
      <div className="main_content_holder">
        <div>
          {this.props.title}
        </div>
      <div>
        {routes}
      </div>
      </div>

      </Provider>
    );
  }
}

Application.propTypes = {
  title: PropTypes.string.isRequired
};

export default Application;

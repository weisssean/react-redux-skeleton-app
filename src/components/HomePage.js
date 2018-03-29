import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as farmActions from "../actions/solarFarmActions";

import {Col, Row,ListGroup, ListGroupItem, Badge} from 'reactstrap';

class HomePage extends React.Component {

  render() {

    return (
      <div className="container-fluidr">
       Home
      </div>
    );
  }
}


HomePage.propTypes = {
  // user: PropTypes.object.isRequired,
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  return {
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(farmActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


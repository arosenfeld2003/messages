import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_THINGS_REQUEST = "GET_THINGS_REQUEST";

function getThings() {
  console.log('getThings() Action!!');
  return {
    type: GET_THINGS_REQUEST
  }
}

class Welcome extends React.Component {
  render() {
    return(
        <React.Fragment>
          <button className="getThingsBtn" onClick={() => this.props.getThings()}>Get Things</button>
        </React.Fragment>
      )
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(Welcome)

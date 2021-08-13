import React, { Component } from "react";
import {connect} from 'react-redux';
class CompPlay extends Component {
  render() {
      const {compArr,compSelect} = this.props;
    return (
      <div className="Player">
        <img width="250px" src="./images/playerComputer.png" alt="" />
        <div className="result show">
          <button className="UserSelect">
            <img width="40px" src={(!!compSelect?compArr[(compSelect-1)].img:compArr[0].img)} alt="" />
          </button>
          <div className="speech-bubble compSpeech-buddle"></div>
        </div>
        <div className="actionGif3">
          <img width="120px" src="./images/rocket-png-40794.png" alt="" />
        </div>
        <div className="actionGif4">
          <img src="./images/YQDj.gif" alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    compArr: state.OanTuTiReducer.TuTiArr,
    compSelect: state.OanTuTiReducer.compRandom,
})

export default connect(mapStateToProps)(CompPlay);

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
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    compArr: state.OanTuTiReducer.TuTiArr,
    compSelect: state.OanTuTiReducer.compRandom,
})

export default connect(mapStateToProps)(CompPlay);

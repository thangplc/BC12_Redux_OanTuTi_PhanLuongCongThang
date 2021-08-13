import React, { Component } from "react";
import "./assets/css/oan-tu-ti.css";
import UserSelect from "./UserSelect";
import CompPlay from "./CompPlay";
import GameInfo from "./Info";
import { connect } from "react-redux";
class GameOanTuTi extends Component {
  componentDidMount = () => {
    document.addEventListener("click", this.Play);
  };
  Play = (event) => {
    const playBtn = event.target.closest(".btn-play");
    if (!!playBtn) {
      this.props.PlayGame();
    }
  };
  render() {
    return (
      <div className="gameTuti">
        <h1>I'm iron man, I love you 3000 !!</h1>
        <div className="gameContains row">
          <div className="col-4">
            <UserSelect />
          </div>
          <div className="col-4">
            <GameInfo />
          </div>
          <div className="col-4">
            <CompPlay />
          </div>
        </div>
        <button className="btn btn-success btn-play">Play</button>
        <img className="ImgBg" src="./assets/images/bgGame.png" alt="" />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  PlayGame: () => {
    dispatch({ type: "PLAY_GAME" });
  },
});

export default connect(null, mapDispatchToProps)(OanTuTiGame);

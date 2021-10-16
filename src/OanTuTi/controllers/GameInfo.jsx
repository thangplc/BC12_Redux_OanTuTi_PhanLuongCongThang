import React, { Component } from 'react';
import {connect} from 'react-redux';
class GameInfo extends Component {
    render() {
        const {winMatch, matchCount} = this.props;
        return (
            <div className="gameInfo">
                <h1 className="Info">{this.props.Status}</h1>
                <h2>Số màn thắng: <span className="infoResult">{winMatch}</span></h2>
                <h2>Số màn chơi: <span className="infoResult">{matchCount}</span></h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    winMatch: state.OanTuTiReducer.winCount,
    matchCount: state.OanTuTiReducer.totalCount,
    Status: state.OanTuTiReducer.Status,
})

export default connect(mapStateToProps)(GameInfo);

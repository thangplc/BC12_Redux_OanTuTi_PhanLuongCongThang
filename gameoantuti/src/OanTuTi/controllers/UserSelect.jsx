import React, { Component } from "react";
import {connect} from 'react-redux';
class UserSelect extends Component {
    componentDidMount = ()=>{
        document.addEventListener('click', this.ClickSelectItem);
    }
    ClickSelectItem = (event) => {
        const btnSelect = event.target.closest('button.col-3');
        if(!!btnSelect){
            this.props.SelectItem(btnSelect.dataset.select);
        }
    }
    displaySkill = (skill) => {
        if(!skill){
            return;
        }
        return setTimeout(() => {
            document.querySelector('.actionGif1').style.display = 'block';
        }, 1000);
    }
  render() {
    const {TuTiArr, selected, skill} = this.props;
    this.choseBtn = selected - 1;
    return (
      <div className="Player">
        <img width="250px" src="./images/player.png" alt="" />
        <div className="row selectBtn container m-auto justify-content-center">
          {TuTiArr.map((tuti, idx) =>{
              return (<button key={idx} data-select = {idx+1} className={"btn col-3 mx-1 " + (!!selected && this.choseBtn==idx? "selected":"")}>
                        <img width="40px" src={tuti.img} alt="" />
                    </button>)
          })}
        </div>
        <div className={"result " + (selected? "show": "")}>
          <button className="UserSelect">
            <img width="40px" src={TuTiArr[(!!selected?this.choseBtn:0)].img} alt="" />
          </button>
          <div className="speech-bubble"></div>
        </div>
        {this.displaySkill(skill)}
        <div className="actionGif1">
            <img src="./images/thunder.gif" alt="" />
        </div>
        <div className="actionGif2">
            <img src="./images/YQDj.gif" alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    TuTiArr: state.OanTuTiReducer.TuTiArr,
    selected: state.OanTuTiReducer.Select,
    Skill: state.OanTuTiReducer.skillAction,
})

const mapDispatchToProps = dispatch => ({
        SelectItem: id => {
            const action = {
            type: "SELECT_ITEM",
            payload: id,
            };
            dispatch(action);
        }
})
export default connect(mapStateToProps,mapDispatchToProps)(UserSelect);
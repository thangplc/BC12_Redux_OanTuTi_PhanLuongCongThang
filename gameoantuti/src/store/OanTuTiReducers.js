const initialState = {
    TuTiArr: [
        {
            img: './images/bao.png',
            value: "bao",
        },
        {
            img: './images/bua.png',
            value: "bua",
        },
        {
            img: './images/keo.png',
            value: "keo",
        }
    ],
    Select: 0,
    compRandom: 0,
    winCount: 0,
    totalCount: 0,
    Status: '',
    skillAction: '',
}

const OanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SELECT_ITEM":
            state.Select = payload;
            return {...state};
        case "PLAY_GAME":
            if(state.Select == 0){
                state.Status = 'Bạn định ra cái gì?';
                return {...state};
            }
            state.totalCount += 1;
            state.compRandom = Math.floor(Math.random()*3+1);
            switch(state.Select){
                case "1": {
                    switch(state.TuTiArr[(state.compRandom-1)].value){
                        case "bao":
                            state.Status = 'Hòa';
                            break;
                        case 'bua':
                            state.Status = 'Thắng';
                            break;
                        case 'keo':
                            state.Status = 'Thua';
                            break;
                    }
                    break;
                }
                case "2": {
                    switch(state.TuTiArr[(state.compRandom-1)].value){
                        case "bao":
                            state.Status = 'Thua';
                            break;
                        case 'bua':
                            state.Status = 'Hòa';
                            break;
                        case 'keo':
                            state.Status = 'Thắng';
                            break;
                    }
                    break;
                }
                case "3": {
                    switch(state.TuTiArr[(state.compRandom-1)].value){
                        case "bao":
                            state.Status = 'Thắng';
                            break;
                        case 'bua':
                            state.Status = 'Thua';
                            break;
                        case 'keo':
                            state.Status = 'Hòa';
                            break;
                    }
                    break;
                }
            }
            if(state.Status=="Thắng"){
                state.skillAction = true;
                state.winCount++;
            }
            else if(state.Status == 'Thua'){
                state.skillAction = false;
            }
            return {...state};
        default:
            return state;
    }
}

export default OanTuTiReducer;

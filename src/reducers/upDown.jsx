const initialState = 0;

const changeTheNumber = (state=initialState,action) => {
    switch(action.type){
        case "INCREMENT1":return state+1;
        case "DECREMENT1":return state-1;
        case "INCREMENT5":return state+5;
        case "DECREMENT5":return state-5;
        case "MULTIPLY2":return state*2;
        case "DIVIDE2":return state/2;
        case "MULTIPLY5":return state*5;
        case "DIVIDE5":return state/5;
        case "RESET":return 0;
        default:return state;
    }
}

export default changeTheNumber;
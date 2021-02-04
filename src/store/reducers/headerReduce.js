
const defaultState = {
    isFocus: false
}

function headerReducer(state = defaultState, action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'search_focus':
            state.isFocus = true;
            break;
        case 'search_blur':
            state.isFocus = false;
            break;
        default:
    }
    console.log('renducer中打印的state=====>', state)

    return state;
}


export default headerReducer;
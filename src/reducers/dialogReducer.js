const initialState = [
    {
        dialog: false
    }
]

const dialogReducer = (state = initialState,action) => {
    switch(action.type) {
        case "OPEN_DIALOG":
        return [{dialog:action.payload}];

        case "CLOSE_DIALOG":
        return [{dialog:action.payload}];
        
        default :
        return state
    }
}

export default dialogReducer
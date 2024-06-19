const initial :boolean = false;
const openFormReducer = (state = initial,action:any)=>{
    switch (action.type) {
        case "OPEN":
            return true
        case "CLOSE":
            return false
        default:
            return state
    }
}

export default openFormReducer;
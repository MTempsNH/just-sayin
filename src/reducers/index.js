export default (state = {}, action) => {
    switch (action.type) {
        case 'SIGNUP':
            state.email = action.value
            return state
        default:
            return state
    }
}
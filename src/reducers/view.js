import {
    SHOW_MODAL,
    HIDE_MODAL,
    NOTIFY_ERROR,
    ADD_NAME_TO_NEW_CREATURE,
    SORT_BY,
    START_SETTING_FREE
} from './../actions/actionTypes'


export default function view( state = { sortKey : 'age'}, action) {
    switch(action.type){
        case SHOW_MODAL :
            return Object.assign({}, state, {displayModal :true})
        case HIDE_MODAL :
            return Object.assign({}, state, {displayModal :false, modalContent: null})
        case NOTIFY_ERROR:
            return Object.assign({}, state, { nameError : true})
        case ADD_NAME_TO_NEW_CREATURE :
            return Object.assign({}, state, {nameError: false})
        case SORT_BY :
            return Object.assign({}, state, {sortKey : action.key})
        case START_SETTING_FREE :
            return Object.assign({})
        default:
            return state
    }
}


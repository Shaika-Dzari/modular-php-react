import {doErrorAppend} from './error.js';

// API
const API = '/api/banner';

// Actions
const BANNER_RECEIVE = 'BANNER_RECEIVE';
const BANNER_TOGGLE = 'BANNER_TOGGLE';

// Action Creators
export function doBannerFetch() {
    return (dispatch) => {
        return fetch(API).then(r => {
            if (!r.ok) {
                dispatch(doErrorAppend(API + ' ' + r.status));
            }


        }).catch(e => {
            dispatch(doErrorAppend('' + e.message))
        });
    }
}

export function doBannerReceive(banner) {
    return {
        type: BANNER_RECEIVE,
        banner
    }
}

export function doBannerToggle(opened) {
    return {
        type: BANNER_TOGGLE,
        opened
    }
}

// State
const initialState = {
    text: '',
    opened: false
};

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case BANNER_RECEIVE:
            return {text: action.text, opened: state.opened};

        case BANNER_TOGGLE:
            return {text: state.text, opened: action.opened};

        default:
            return state;
    }
}

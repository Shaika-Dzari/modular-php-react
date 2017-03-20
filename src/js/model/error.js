// Actions
const ERROR_APPEND = 'ERROR_APPEND';

// Action Creators
export function doErrorAppend(error) {
    return {
        type: ERROR_APPEND,
        error
    }
}

// Initial State
const initialState = {
    errors: []
};

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ERROR_APPEND:
            let ne = [...state.errors];
            ne.push(action.error);

            return {errors: ne};

        default:
            return state;
    }
}

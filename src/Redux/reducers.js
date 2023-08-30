const initialState = {
    user: {},
    repositories: [],
    loading: false,
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_USER_DATA_SUCCESS':
            return { ...state, user: action.payload, loading: false, error: null };
        case 'FETCH_USER_REPOS_SUCCESS':
            return { ...state, repositories: action.payload };
        case 'FETCH_USER_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default rootReducer;

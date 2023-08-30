import axios from 'axios';

export const fetchUserData = (username) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_USER_DATA_REQUEST' });

        axios
            .get(`https://api.github.com/users/${username}`)
            .then((response) => {
                dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: response.data });
                return axios.get(response.data.repos_url); // Fetch repositories using repos_url
            })
            .then((reposResponse) => {
                dispatch({ type: 'FETCH_USER_REPOS_SUCCESS', payload: reposResponse.data });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: error.message });
            });
    };
};

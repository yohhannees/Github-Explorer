import React from 'react';
import { useSelector } from 'react-redux';
const Loader = () => {
    const loading = useSelector((state) => state.loading);

    if (!loading) {
        return null; // Don't render the Loader component if loading is false
    }

    return <div className="loading-spinner">
        <div className="spinner"></div>
        <div className="loading-text">Loading....</div>
    </div>;
};

export default Loader;

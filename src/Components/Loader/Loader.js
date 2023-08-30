import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css'; // Import the external CSS file

const Loader = () => {
    const loading = useSelector((state) => state.loading);

    if (!loading) {
        return null; // Don't render the Loader component if loading is false
    }

    return (
        <div className="loader-container">
            <div className="loader"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

export default Loader;

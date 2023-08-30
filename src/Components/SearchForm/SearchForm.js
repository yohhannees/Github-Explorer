import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../Redux/actions';
import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from "./explorer-github.webp"

const SearchForm = () => {
    const [username, setUsername] = useState('');
    const errorMessage = useSelector((state) => state.error);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || username.trim().length === 0) {
            toast.error(`Search by username...`);
            return;
        }
        if (errorMessage) {
            toast.error(`${errorMessage} Search by username...`);
        }

        dispatch(fetchUserData(username));
        setUsername(''); 
        console.log(errorMessage);

    };

    return (
        <div className="searchBar-container">
            <div className='image-container'>
                <img src={background} alt='imag' />
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <h1>GitHub Explorer</h1>
                <div className="search-input-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Type username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="search-icon-container">
                        <AiOutlineSearch className="search-icon" />
                    </div>
                </div>
                <button className="search-button" type="submit">Search</button>
            </form>
            <ToastContainer />

        </div>
    );
};

export default SearchForm;

import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../Redux/actions';
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from "./explorer-github.webp";
import './searchform.css'; // Import the external CSS file

const SearchForm = () => {
    const [username, setUsername] = useState('');
    const errorMessage = useSelector((state) => state.error);
    const dispatch = useDispatch();
    const bottomRef = useRef(null); // Reference to the bottom of the page

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || username.trim().length === 0) {
            toast.error('Please enter a username');
            return;
        }

        if (errorMessage) {
            toast.error(`${errorMessage}. Please enter a username`);
        }

        dispatch(fetchUserData(username));
        setUsername('');

        // Scroll to the bottom when username is found
        if (!errorMessage) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="searchBar-container">
            <div className='image-container'>
                <img src={background} alt='GitHub Explorer' />
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <h1>GitHub Explorer</h1>
                <div className="search-input-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Enter a username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="search-button" type="submit">
                        <AiOutlineSearch className="search-icon" />
                    </button>
                </div>
            </form>
            <div ref={bottomRef}></div> {/* Empty div for scrolling to bottom */}
            {errorMessage ? (
                <div className="scroll-button" onClick={() => bottomRef.current.scrollIntoView({ behavior: 'smooth' })}>
                    <AiOutlineArrowDown className="scroll-icon" />
                    Scroll to Bottom
                </div>
            ) : null}
            <ToastContainer />
        </div>
    );
};

export default SearchForm;

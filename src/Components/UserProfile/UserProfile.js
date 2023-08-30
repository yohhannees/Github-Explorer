import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCodeBranch, faUsers, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import RepositoryList from '../RepositoryList/RepositoryList';

const UserProfile = () => {
    const user = useSelector((state) => state.user);

    if (!user.name) {
        return null; // Don't render the UserProfile component if user information is not available
    }

    return (
        <div className='details-container'>
            <div className="detail-card">
                <div className="card-body">
                    <img src={user.avatar_url} alt="Profile" />
                    <div className='profile-desc'>
                        <h2><FontAwesomeIcon icon={faUser} /> {user.name}</h2>
                        <p><FontAwesomeIcon icon={faCodeBranch} /> Repositories: {user.public_repos}</p>
                        <p><FontAwesomeIcon icon={faUsers} /> Followers: {user.followers}</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: {user.location}</p>
                        <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Go to GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
            <div className='detail-card'> <RepositoryList /></div>
        </div>
    );
};

export default UserProfile;

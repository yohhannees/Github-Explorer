import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';

const RepositoryList = () => {
    const repositories = useSelector((state) => state.repositories);

    if (repositories.length === 0) {
        return null; // Don't render the RepositoryList component if repositories data is not available
    }

    return (
        <div className='repoList'>
            <h3><FontAwesomeIcon icon={faCodeBranch} /> Repositories</h3>
            <ul className="repository-list">
                {repositories.map((repo) => (
                    <li key={repo.id}>
                        <div className="repo-details">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </div>
                        <div className="repo-icons">
                            <span className='space'>
                                <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
                            </span>
                            <span className='space'>
                                <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks_count}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepositoryList;

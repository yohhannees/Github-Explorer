import React from 'react';
import { useSelector } from 'react-redux';

const RepositoryList = () => {
    const repositories = useSelector((state) => state.repositories);

    if (repositories.length === 0) {
        return null; // Don't render the RepositoryList component if repositories data is not available
    }

    return (
        <div className='repoList'>
            <h3>Repositories</h3>
            <ol className="repository-list">
                {repositories.map((repo) => (
                    <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                ))}
            </ol>
        </div>
    );
};

export default RepositoryList;

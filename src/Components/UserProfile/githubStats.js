import React from 'react';

const gitHubStats = ({ username }) => {
    const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&theme=highcontrast&hide_border=false&include_all_commits=false&count_private=true`;
    const streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=highcontrast&hide_border=false`;
    const topLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=highcontrast&langs_count=20&hide_border=false&count_private=true&hide=html,css,scss`;

    return (
        <div className="github-stats-container">
            <p align="center">
                <iframe src={githubStatsUrl} frameBorder="0" scrolling="no" width="100%" height="150" title="GitHub Stats"></iframe>
            </p>

            <p align="center">
                <iframe src={streakStatsUrl} frameBorder="0" scrolling="no" width="100%" height="150" title="GitHub Streak"></iframe>
            </p>

            <p align="center">
                <iframe src={topLanguagesUrl} frameBorder="0" scrolling="no" width="100%" height="200" title="Top Languages"></iframe>
            </p>
        </div>
    );
};

export default gitHubStats;

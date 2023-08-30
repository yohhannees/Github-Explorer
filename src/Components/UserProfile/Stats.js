import React from 'react';
import { useSelector } from 'react-redux';
import './stats.css';
const Stats = () => {
    const user = useSelector((state) => state.user); // Get the user data from the Redux store

    if (!user) {
        return null; // Don't render the Stats component if user data is not available
    }

    const { login } = user; // Extract the username from the user data

    const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${login}&theme=highcontrast&hide_border=false&include_all_commits=false&count_private=true`;
    const streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${login}&theme=highcontrast&hide_border=false`;
    const topLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&theme=highcontrast&langs_count=5&hide_border=false&count_private=true&hide=html,css,scss`;

    return (
        <div className="github-stats-container">
            <div className="iframe-container">
                <iframe src={githubStatsUrl} frameBorder="0" scrolling="no" title="GitHub Stats" />
                <iframe src={topLanguagesUrl} frameBorder="0" scrolling="no" title="Top Languages" />
                <iframe src={streakStatsUrl} frameBorder="0" scrolling="no" title="GitHub Streak" />
                
            </div>
        </div>
    );
};

export default Stats;

import React from "react";
import { useState, useEffect } from "react";
import "./finder.css";


const DisplayInformations = ({ user }) => {
    const { login, avatar_url, name, bio, public_repos, followers, following } = user;
    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
            </div>
            <div className="biographiw">{bio}</div>
            <div className="informations">
                <div>Repos: {public_repos}</div>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
            </div>
        </div>
    )
}

const Finder = () => {
    const [user, setUser] = useState("extermachraf");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUser() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        if (data) {
            setUserData(data);
        }
        setLoading(false);
    }

    function handleSubmit() {
        fetchGithubUser();
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="finder-container">
            <div className="input-container">
                <input
                    name="search-bar"
                    type="text"
                    placeholder="Github Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ?
                    < DisplayInformations user={userData} />
                    : null
            }
        </div>
    );
};

export default Finder;

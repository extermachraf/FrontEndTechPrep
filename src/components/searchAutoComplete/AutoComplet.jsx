import React, { useEffect, useState } from "react";

const AutoComplet = () => {

    const [loding, setLoding] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filterData = users && users.length ?
                users.filter((user) => user.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filterData);
            setDropDown(true);
        }
        else
            setDropDown(false);

    }

    async function fetchListOfUsers() {
        try {
            setLoding(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();

            if (data && data.users && data.users.length > 0) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoding(false);
                setError(null);
            }
        }
        catch (error) {
            setLoding(false);
            console.error('Error:', error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, [])

    if (loding) {
        return <p>Loading...</p>
    }

    console.log('users:', users);
    console.log('filteredUsers:', filteredUsers);

    function handleSelecting(event) {
        setSearchParam(event.target.innerText);
        setDropDown(false);
    }
    return (
        <div className="search-auto-container">
            <input
                onChange={handleChange}
                value={searchParam}
                name="search-users"
                type="text"
                placeholder="Search users here ..."
            />
            {
                dropDown && filteredUsers.length > 0 && (
                    <ul className="search-auto-dropdown">
                        {
                            filteredUsers.map((user, index) => (
                                <li onClick={handleSelecting} key={index}>{user}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
};

export default AutoComplet;

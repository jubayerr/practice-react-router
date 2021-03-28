import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([])
    // console.log(users);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="home">
            {
                users.map(user => <Users user={user}></Users>)
            }
        </div>
    );
};

export default Home;
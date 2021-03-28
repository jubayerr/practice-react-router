import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Users.css'

const Users = (props) => {
    // console.log(props);
    const { name, email, id } = props.user
    const history = useHistory()
    const handleClick = (profileId) => {
        history.push(`/profile/${profileId}`)
    }
    return (
        <div className="users">
            <h2>{name}</h2>
            <p>{email}</p>
            {/* <Link to={`/profile/${id}`}><button>See more</button></Link> */}
            <button onClick={() => handleClick(id)}>See Profile</button>
        </div>
    );
};

export default Users;
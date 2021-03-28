import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Profile.css'

const Profile = () => {
    const { profileId } = useParams()
    const [profile, setProfile] = useState({})
    const { name, email, website } = profile
    // console.log(profile);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${profileId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    return (
        <div className="profile">
            <h2>{name}</h2>
            <img src="https://picsum.photos/200" />
            <p>Email: <strong>{email}</strong></p>
            <p>Website: <strong>{website}</strong></p>
        </div>
    );
};

export default Profile;
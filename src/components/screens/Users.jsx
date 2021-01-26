import React ,{useState ,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

function Users() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://reqres.in/api/users`)
            .then(function (response) {
                // handle success
                setUsers(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },[])

    let renderUser = () => {
        return users.map((user) => (
            <Link to={`/user/${user.id}`}>
                <li key={user.id}>
                    <img src={user.avatar} alt={user.first_name} />
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>{user.email}</p>
                </li>
            </Link>
        ))
    }

    return (
        <div>
            <Helmet>
                <title>users</title>
            </Helmet>
            <h1>User Page</h1>
            <ul>
                {renderUser()}
            </ul>
        </div>
    )
}

export default Users

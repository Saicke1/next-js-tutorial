import Link from 'next/link';
import React from 'react';
import User from '../components/User';

type Props = {
    users: []
}

const UserList = ({users}: Props) => {
  return (
    <>
    <div>List of Users</div>
    <Link href='/'>Get back to Homepage</Link>
    {users.map(user => {
        const {id, name, email} = user;
        return (
            <div key={id}>
                {/* <p>{name}</p>
                <p>{email}</p> */}
                <User user={user}/>
            </div>
        )
    })}
    </>
  )
}

export default UserList;

export async function getStaticProps () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data,
        }
    }
}

/* const {username, message, messagecreatedat, avatar, commentid} = comment; */
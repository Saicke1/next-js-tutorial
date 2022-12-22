import React from 'react';

interface UserProps {
    user: {
        name: string;
        email: string;
    }
}

const User = ({user}: UserProps) => {
    console.log('user', user);
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default User;
import React, { useState } from 'react';
import { axiosWithAuth } from "../api/axiosWithAuth";

const AddFriend = props =>{
    
    const [value, setValue] = useState({});

    const submitFriend = e =>{
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', value)
            .then(res=>{
                console.log(res);
                props.history.push('/FriendsList');
            })
    }

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={submitFriend}>
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    onChange={handleChange}
                    placeholder='name'
                />

                <input
                    type='text'
                    name='age'
                    value={value.age}
                    onChange={handleChange}
                    placeholder='age'
                />

                <input
                    type='text'
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                    placeholder='e-mail'
                />
                <button>add a new friend</button>
                
            </form>
        </div>
    )

}

export default AddFriend;
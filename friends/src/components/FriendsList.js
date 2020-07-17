import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../api/axiosWithAuth.js";

export default function FriendsList(props) {

    const [data, setData] = useState([{ name: '' }]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res)
                setData(res.data);
                // console.log(`${data}`);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <h1>List of Your Friends:</h1>
            <div>
                {data.map(item => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>
        </div>

    )
}
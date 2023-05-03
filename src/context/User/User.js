import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserContext from "./UserContext";



const User = (props) => {
    const host = process.env.REACT_APP_API_URL;
    const [allUsers, setAllUsers] = useState(0)
    const [wholesellers, setWholeSellers] = useState(0)
    const [dropShippers, setDropShippers] = useState(0)
    const [requests, setRequests] = useState(0)


    let [user, setUser] = useState({})
    let [error, setError] = useState('');

    useEffect(() => {
        const userDetails = async () => {
            try {
                const { data } = await axios.get(`${host}/api/auth/user`, { headers: { "Content-Type": "application/json", } },);
                setUser(data);
            } catch (e) {
                setError(e);
            }
        }
        userDetails();
    }, [])

    const getAllUsers = async () => {
        const { data } = await axios.get(`${host}/api/auth/allUsers`);
        const Wholesellers = await axios.get(`${host}/api/auth/allwholesellers`);
        const DropShippers = await axios.get(`${host}/api/auth/alldropShippers`);
        const Requests = await axios.get(`${host}/api/auth/allrequests`);
        setAllUsers(data.length);
        setWholeSellers(Wholesellers.data.length);
        setDropShippers(DropShippers.data.length);
        setRequests(Requests.data.length);
    }

    useEffect(() => {
        if (user.isAdmin === true) {
            getAllUsers();
        }
    }, [user, allUsers, wholesellers, dropShippers, requests])// eslint-disable-line react-hooks/exhaustive-deps


    const getAndSetUsers = async () => {
        const { data } = await axios.get(`${host}/api/auth/allUsers`);
        const Wholesellers = await axios.get(`${host}/api/auth/allwholesellers`);
        const DropShippers = await axios.get(`${host}/api/auth/alldropShippers`);
        const Requests = await axios.get(`${host}/api/auth/allrequests`);
        setAllUsers(data.length);
        setWholeSellers(Wholesellers.data.length);
        setDropShippers(DropShippers.data.length);
        setRequests(Requests.data.length);
    }

    const getUserDetails = async () => {
        try {
            const { data } = await axios.get(`${host}/api/auth/user`, { headers: { "Content-Type": "application/json", } },);
            setUser(data);
        } catch (e) {
            setError('');
        }
    }




    return (
        <UserContext.Provider value={{ user, getUserDetails, error, allUsers, setAllUsers, wholesellers, setWholeSellers, dropShippers, setDropShippers, requests, setRequests, getAndSetUsers }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default User
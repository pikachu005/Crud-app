import { Typography, FormGroup, FormControl, Input, InputLabel, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import react from 'react';
import { editUsers, getUsers } from '../Service/api'

import { useHistory, useParams } from "react-router";
import { useEffect } from "react";


const useStyle = makeStyles({
    container : {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop :'20px'
        }
    }
})


const initialValues = {
    name : '',
    username : '',
    email : '',
    phone: '' 
}

const EditUsers = () => {

    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;    
    let history = useHistory();
    const classes = useStyle();
    const {id} = useParams();


    useEffect(() =>{
        loadUserData();
    }, [])

    const loadUserData = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    const onValueChange = (e) => {
        // console.log(e.target.value)
        setUser({...user, [e.target.name] : e.target.value})
        // console.log(user);
    }

    const editUserDetails = async() => {
        await editUsers(id, user);
        history.push('/all')
    }

    return(
        <FormGroup className = {classes.container}>
            <Typography variant = 'h4' >Edit Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'name' value = {name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'username' value = {username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'email' value = {email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'phone' value = {phone} />
            </FormControl>
            <Button variant = 'contained' color = 'primary' onClick = {() => editUserDetails()}>Edit User</Button>
        </FormGroup>
    );
}

export default EditUsers;
import { Typography, FormGroup, FormControl, Input, InputLabel, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import react from 'react';
import { addUsers } from '../Service/api'

import { useHistory } from "react-router";


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

const AddUsers = () => {

    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;    
    const history = useHistory();

    const onValueChange = (e) => {
        // console.log(e.target.value)
        setUser({...user, [e.target.name] : e.target.value})
        // console.log(user);
    }

    const addUserDetails = async() => {
        await addUsers(user);
        history.push('./all')
    }

    const classes = useStyle();
    return(
        <FormGroup className = {classes.container}>
            <Typography variant = 'h4' >Add Users</Typography>
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
            <Button variant = 'contained' color = 'primary' onClick = {() => addUserDetails()}  >Add User</Button>
        </FormGroup>
    );
}

export default AddUsers;
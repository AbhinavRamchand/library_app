import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Form, Button, CardFooter } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const Registration = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // Handle changes for password 
    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    // Handle changes for username
    function handleChangeText(event) {
        setUsername(event.target.value)
    }

    // Handle changes for email 
    function handleChangeEmail(event) {
        setUseremail(event.target.value)
    }


    function handleRegister(event) {
        event.preventDefault();


        if (username.trim() === '' || useremail.trim() === '' || password.trim() === '') {
            setErrorMessage('All fields must be filled.');
            setTimeout(() => {
                setErrorMessage('')
            }, 3000);
        } else {
            const user = { username, useremail, password }
            navigate('/Login', {
                state: { user }
            })
        }
    }

    return (
        <>
            <div className='container w-50'>
                <Card style={{ marginTop: "100px" }}>

                    <CardHeader>
                        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Register</h1>
                    </CardHeader>
                    <Form onSubmit={handleRegister}>
                        <CardBody>
                            <Form.Control
                                placeholder='Enter username'
                                value={username}
                                name='username'
                                onChange={handleChangeText}
                                style={{ marginTop: "10px" }}
                            />
                            <Form.Control
                                type='email'
                                placeholder='Enter user Email'
                                value={useremail}
                                name='useremail'
                                onChange={handleChangeEmail}
                                style={{ marginTop: "10px" }}
                            />
                            <Form.Control
                                placeholder='Password'  
                                value={password}
                                name='password'
                                onChange={handleChangePassword}
                                style={{ marginTop: "10px" }}
                            />


                        </CardBody>
                        <CardFooter>
                            <p style={{ color: 'red' }}>{errorMessage}</p>
                            <Button type='submit'>Submit</Button>
                        </CardFooter>
                    </Form>
                </Card>
            </div >
        </>
    )
}

export default Registration;

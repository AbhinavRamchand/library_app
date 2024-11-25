import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button, CardFooter, CardHeader } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle username change
    function handleChangeText(event) {
        setUsername(event.target.value);
    }

    // Handle email change
    function handleChangeEmail(event) {
        setUseremail(event.target.value);
    }

    // Handle password change
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    // Handle login form submission
    function handleLogin(event) {
        event.preventDefault();
        const registerUser = location.state?.user;

        // Check if user is registered and credentials match (including email and password)
        if (registerUser && registerUser.username === username && registerUser.useremail === useremail && registerUser.password === password) {
            navigate('/DashBoard', {
                state: {
                    dash: username
                }
            });
        } else {
            setError('Login failed. Please check your Credentials.');
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }

    return (
        <>
            <div className="container w-50" style={{ marginTop: "100px" }}>
                <Card>
                    <CardHeader>
                        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Login</h1>
                    </CardHeader>
                    <Form onSubmit={handleLogin}>
                        <Card.Body>
                            <Form.Control
                                placeholder="Enter username"
                                value={username}
                                name="username"
                                onChange={handleChangeText}
                                style={{ marginTop: "10px" }}
                            />
                            <Form.Control
                                type='emai'
                                placeholder="Enter email"
                                value={useremail}
                                name="useremail"
                                onChange={handleChangeEmail}
                                style={{ marginTop: "10px" }}
                            />
                            <Form.Control
                                placeholder="Password"
                                value={password}
                                name="password"
                                onChange={handleChangePassword}
                                style={{ marginTop: "10px" }}
                            />
                            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                        </Card.Body>

                        <CardFooter>
                            <Button style={{ marginBottom: "15px" , marginTop : "10px" }} type='submit'>Submit</Button>
                        </CardFooter>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default Login;

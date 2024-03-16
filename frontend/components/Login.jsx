import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography, Grid, Alert } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { setAuthData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setAuthData(data); // This line updates the authentication context
                console.log('Login Successful: ', data);
                navigate('/'); // Navigate to the homepage or dashboard
            } else {
                setError(data.message || 'Login Failed');
            }
        } catch (error) {
            console.error('Login error: ', error);
            setError('Login Failed');
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant='h4' sx={{ my: 2}}>
                Login
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField fullWidth margin="normal" label="Email" name="email" type='email' value={credentials.email} onChange={handleChange} />
                <TextField fullWidth margin="normal" label="Password" name="password" type="password" value={credentials.password} onChange={handleChange} />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Button fullWidth type="submit" variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => navigate('/register')}>Not Signed Up? Register!</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;
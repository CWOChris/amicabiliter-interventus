import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate the login process
    login(credentials);
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" name="email" value={credentials.email} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Password" name="password" type="password" value={credentials.password} onChange={handleChange} margin="normal" />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>Login</Button>
      </form>
    </Container>
  );
}

export default LoginPage;
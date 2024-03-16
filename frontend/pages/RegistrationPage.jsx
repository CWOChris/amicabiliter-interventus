import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

function RegistrationPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would usually call your backend to register the user
    console.log(user);
    // After successful registration, you might want to auto-login or navigate to the login page
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="First Name" name="firstName" value={user.firstName} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Email" name="email" type="email" value={user.email} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Password" name="password" type="password" value={user.password} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Date of Birth" name="dateOfBirth" type="date" InputLabelProps={{ shrink: true }} value={user.dateOfBirth} onChange={handleChange} margin="normal" />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>Register</Button>
      </form>
    </Container>
  );
}

export default RegistrationPage;

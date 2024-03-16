// Assuming LoginForm.jsx exists in your components directory
import React from 'react';
import { Container, Typography } from '@mui/material';
import Login from '../components/Login'; // Adjust the import path as needed

function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Login</Typography>
      <Login />
    </Container>
  );
}

export default LoginPage;

// RegistrationPage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import RegistrationForm from '../components/RegistrationForm'; // Adjust path as needed

function RegistrationPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Register</Typography>
      <RegistrationForm />
    </Container>
  );
}

export default RegistrationPage;

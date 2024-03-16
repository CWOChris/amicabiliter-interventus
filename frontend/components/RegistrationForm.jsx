import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '', // Ensure date format matches what your backend expects
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // For debugging; remove in production
    // Add call to backend registration endpoint here
    // Example: await axios.post('/api/users/register', formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{ margin: '20px 0' }}>Register</Typography>
      <form onSubmit={handleSubmit}>
        {/* Fields match the User.js model */}
        <TextField fullWidth margin="normal" label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Date of Birth" name="dateOfBirth" type="date" InputLabelProps={{ shrink: true }} value={formData.dateOfBirth} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary" style={{ margin: '20px 0' }}>Register</Button>
      </form>
    </Container>
  );
}

export default RegistrationForm;

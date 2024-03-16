import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
    return (
        <Container style={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="body1">
                Amicabiliter Interventus &copy; {new Date().getFullYear()} - <a href="https://github.com/CWOChris" target='blank' rel='noopener noreferrer' style={{color: 'inherit', textDecoration: 'none'}}>CWOChris</a>
            </Typography>
        </Container>
    );
}

export default Footer;
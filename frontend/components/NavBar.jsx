import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' style={{ flexGrow: 1}}>
                    Amicabiliter Interventus
                </Typography>
                <Button color='inherit' component={Link} to="/login">Login</Button>
                <Button color='inherit' component={Link} to="/register">Register</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
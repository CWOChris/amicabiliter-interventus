import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../src/context/AuthContext";
import { Button, Container, Typography } from "@mui/material";

function HomePage() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to Amicabiliter Interventus!
            </Typography>
            <Typography paragraph>This is a protected area. You are logged in.</Typography>
            <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
        </Container>
    );
}

export default HomePage;
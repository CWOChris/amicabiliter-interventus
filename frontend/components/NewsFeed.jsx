import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

function NewsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       fetch('api/posts')
        .then(res => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" style={{ margin: '20px 0' }}>News Feed</Typography>
            {posts.map((post, index) => (
                <Card key={index} style={{ marginBottom: '20px' }}>
                    <CardContent>
                        <Typography variant='h5'>{post.title}</Typography>
                        <Typography variant='body2'>{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}

export default NewsFeed;
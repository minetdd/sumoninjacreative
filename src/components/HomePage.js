// Sumo Ninja Creative Homepage - React + MUI
import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, TextField } from '@mui/material';
import { Code, DesignServices, Build, Send } from '@mui/icons-material';
import SumoNinja from '../assets/SumoNinja1.png';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box textAlign="center" py={2}>
    <h1 style={{
      fontFamily: "'Bangers', cursive",
      color: '#222',
      marginBottom: 8,
      fontSize: 56,
      letterSpacing: 2
    }}>
      Sumo Ninja Creative
    </h1>
      </Box>
      {/* Hero Section */}
      <Box textAlign="center" py={4}>
        <img src={SumoNinja} alt="Coming Soon" style={{ maxWidth: '300px', width: '100%' }} />
      </Box>
      <Box textAlign="center" py={10}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Creative Tech. Powerful Design.
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Web development, tech solutions, and design all under one roof.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Get a Free Quote
          </Button>
          <Button variant="outlined" color="primary" size="large">
            View Our Work
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={8}>
        <Typography variant="h4" align="center" gutterBottom>
          What We Do
        </Typography>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Code fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Web Development
                </Typography>
                <Typography color="textSecondary">
                  Custom websites, hosting, SEO, and performance optimization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Build fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Tech Support
                </Typography>
                <Typography color="textSecondary">
                  Home setup, consulting, troubleshooting, and device management.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <DesignServices fontSize="large" color="primary" />
                <Typography variant="h6" gutterBottom>
                  Design & Branding
                </Typography>
                <Typography color="textSecondary">
                  Logos, visual identity, UI/UX, print, and digital design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <Box py={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Why Sumo Ninja?
        </Typography>
        <Typography maxWidth="md" mx="auto" color="textSecondary">
          Sumo Ninja Creative — where code meets creativity and support comes with a smile. We blend bold design with dependable tech solutions for businesses and creatives alike.
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box py={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Let’s Talk
        </Typography>
        <Box component="form" maxWidth="sm" mx="auto">
          <TextField fullWidth label="Name" margin="normal" required />
          <TextField fullWidth label="Email" margin="normal" required />
          <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
          <Box mt={2} textAlign="center">
            <Button variant="contained" endIcon={<Send />}>Send Message</Button>
          </Box>
        </Box>
      </Box>

    </Container>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const primary = red[500];

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        Page Not Found 404
      </Typography>
    </Box>
  );
}
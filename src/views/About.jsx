import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box p={4}>
      <Typography variant="h5">Acerca de</Typography>
      <Typography>Esta es una SPA hecha con React, Router y Material UI.</Typography>
    </Box>
  );
}

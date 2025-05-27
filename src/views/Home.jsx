import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  const [texto, setTexto] = useState("Bienvenido a Home");

  return (
    <Box p={4}>
      <Typography variant="h6">{texto}</Typography>
      <Button variant="contained" onClick={() => setTexto("¡Texto actualizado!")}>Actualizar</Button>
    </Box>
  );
}

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulación: aceptar si usuario === "admin" y contraseña === "1234"
    if (username === 'admin' && password === '1234') {
      onLogin(); // activa sesión en App.jsx
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5">Iniciar sesión</Typography>
      <TextField
        label="Usuario"
        fullWidth
        sx={{ my: 1 }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        sx={{ my: 1 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Entrar
      </Button>
    </Box>
  );
}

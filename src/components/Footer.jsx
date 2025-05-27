import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box textAlign="center" p={2} mt={5} bgcolor="#f1f1f1">
      <Typography variant="body2">
        © 2025 Mi Aplicación – Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

import { Button } from '@mui/material';

export default function CustomButton({ label, onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
}

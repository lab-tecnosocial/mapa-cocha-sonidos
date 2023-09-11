import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{ alignItems: 'center' }} >
        <Toolbar className="header">
          <img src="https://labtecnosocial.org/wp-content/uploads/2023/09/ondas-de-audio.png" width={50} style={{ marginRight: '10px' }} />

          <Typography variant="h5" color="inherit" >
            {/* <img src="https://labtecnosocial.org/wp-content/uploads/2023/09/bocina.png" width={25} /> */}
            <b>Mapa de sonidos de Cochabamba</b>
          </Typography>
        </Toolbar>
      </AppBar >
      <main>
        <Mapa />
      </main>
      <Box className='footer'>
        <Typography variant="subtitle2" color="inherit" align="center" gutterBottom >
          <Link href="https://labtecnosocial.org/" color="inherit" underline="hover" target="_blank" rel="noopener" >
            <img src="https://labtecnosocial.org/wp-content/uploads/2021/07/cropped-logo-claro-300x149.png" alt="logo" width="80px" />
          </Link>
        </Typography>
      </Box>
    </>
  );
}
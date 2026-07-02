import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <Box className="app-shell">
      <AppBar position="fixed" elevation={0} className="topbar">
        <Toolbar className="header">
          <Box className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </Box>

          <Typography variant="h1" color="inherit" className="site-title">
            Mapa de sonidos de Cochabamba
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="map-stage">
        <Mapa />
      </main>
      <Box className='footer'>
        <Typography variant="subtitle2" color="inherit" align="center" className="footer-credit">
          <Link href="https://labtecnosocial.org/" color="inherit" underline="hover" target="_blank" rel="noopener" >
            <img src={`${process.env.PUBLIC_URL}/logo-lab.png`} alt="Lab TecnoSocial" />
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

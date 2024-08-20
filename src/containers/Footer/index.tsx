import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack height="100px" justifyContent="center" alignItems="center">
      <Typography />

      <Typography>
        Made with ❤️ by Penguin Addicted
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography>  Follow us on</Typography>
        <Stack>
          <Link to="https://www.instagram.com/penguin_addicted_/" target="_blank">
            <InstagramIcon />
          </Link>
        </Stack>

      </Stack>

    </Stack>
  );
};

export default Footer;

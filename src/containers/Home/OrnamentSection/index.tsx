import img from '@assets/images/ornament.jpg';
import { Stack, Typography } from '@mui/material';

const OrnamentSection = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={5} py="40px">
      <img
        src={img}
        alt=""
        style={{
          width: '120px',
          transform: 'scaleX(-1)',

        }}
      />
      <Stack sx={{ position: 'relative' }} direction="row">
        <Typography
          sx={{
            position: 'absolute', fontSize: '42px', left: '-35px', top: '-40px', color: '#c8a663',
          }}
        >
          Թ
        </Typography>
        <Typography
          sx={{ position: 'absolute',
            fontSize: '60px',
            left: '-22px',
            top: '-74px',
            fontFamily: 'ArmAllegro',
            opacity: '60%',
            color: '#c8a663' }}
        >
          &
        </Typography>
        <Typography
          sx={{ position: 'absolute', fontSize: '42px', left: '5px', top: '-30px', color: '#c8a663' }}
        >
          Ա
        </Typography>
      </Stack>

      <img
        src={img}
        alt=""
        style={{
          width: '120px',
        }}
      />
    </Stack>
  );
};

export default OrnamentSection;

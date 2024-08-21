import img from '@assets/images/ornament.jpg';
import taImg from '@assets/images/TA.png';
import { Stack } from '@mui/material';

const OrnamentSection = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} py="40px">
      <img
        src={img}
        alt=""
        style={{
          width: '120px',
          transform: 'scaleX(-1)',

        }}
      />
      <img
        src={taImg}
        alt=""
        style={{
          width: '70px',
          objectFit: 'contain',
        }}
      />
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

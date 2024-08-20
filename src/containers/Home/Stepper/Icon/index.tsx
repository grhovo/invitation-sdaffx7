import { StyledImage } from '../styled';

interface IIcon {
  src: string;
}

const Icon = ({ src }:IIcon) => (
  <StyledImage src={src} alt="" />
);

export default Icon;

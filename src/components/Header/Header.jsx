import {
  HeaderEl,
  HeaderIcon,
  BaseName,
} from 'components/Header/Header.styled';
import { TiWaves } from 'react-icons/ti';

export const Header = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <HeaderEl>
      <HeaderIcon>
        <TiWaves />
      </HeaderIcon>

      <BaseName>ERP 'ba3a'</BaseName>
      <div> {formattedDate}</div>
    </HeaderEl>
  );
};

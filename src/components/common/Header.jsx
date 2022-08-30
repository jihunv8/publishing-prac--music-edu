import styled from 'styled-components';

import logo from '../../images/default-logo.png';
import menuIcon from '../../images/icons/menu.svg';

const HeaderWrapper = styled.header``;

const HeaderContents = styled.div`
  width: ${({ theme }) => theme.mediaSize.contentsArea.xLarge};
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TempButton = styled.button`
  /* color: #1847b8; */
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 24px;
  height: 30px;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContents>
        <img src={logo} />
        <TempButton>
          <img src={menuIcon} />
        </TempButton>
      </HeaderContents>
    </HeaderWrapper>
  );
}

export default Header;

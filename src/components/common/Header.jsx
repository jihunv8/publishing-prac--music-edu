import styled from 'styled-components';
import * as mediaSize from '../../global-style/style-util/mediaSize';

import logo from '../../images/default-logo.png';
import menuIcon from '../../images/icons/menu.svg';

function Header() {
  return (
    <header>
      <HeaderContentsArea>
        <Logo>
          <a href="">
            <img src={logo} />
          </a>
        </Logo>

        <TempButton>
          <img src={menuIcon} />
        </TempButton>
      </HeaderContentsArea>
    </header>
  );
}

export default Header;

const HeaderContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;

const Logo = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;

  > a > img {
    width: 64px;
  }
`;

const TempButton = styled.button`
  /* color: #1847b8; */
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  > img {
    width: 24px;
  }
`;

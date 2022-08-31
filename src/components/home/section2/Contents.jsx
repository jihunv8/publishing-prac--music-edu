import styled from 'styled-components';

function Contents({ isDown = false, icon = '', iconAlt = '', title = '', text = '' }) {
  return (
    <ContentsWrapper isDown={isDown}>
      <ContentsIcon>
        <img src={icon} alt={iconAlt} />
      </ContentsIcon>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsText>{text}</ContentsText>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  height: 571px;
  margin: 60px 0;
  padding: ${({ isDown }) => (isDown ? '160px 20px 26px' : '30px 20px')};
  flex-grow: 25;
  flex-basis: 0;
`;

const ContentsIcon = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a9c0f8;
  border-radius: 100%;

  > img {
    width: 38px;
    height: 38px;
  }
`;

const ContentsTitle = styled.h2`
  margin-top: 30px;
  color: #fff;
  font-size: 1.5rem;
  font-family: oswald, sans-serif;
  line-height: 120%;
`;

const ContentsText = styled.div`
  margin-top: 20px;
  color: #fff;
  line-height: 160%;
`;

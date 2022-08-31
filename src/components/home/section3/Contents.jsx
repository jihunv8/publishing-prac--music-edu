import styled from 'styled-components';

function Contents({ title = '', text = '' }) {
  return (
    <ContentsWrapper>
      <Box />
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsText>{text}</ContentsText>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  height: 268px;
  padding: 10px 40px 20px;
  flex-basis: 0;
  flex-grow: 1;
`;

const Box = styled.div`
  width: 41px;
  height: 8px;
  background-color: #a9c0f8;
`;

const ContentsTitle = styled.h3`
  color: #1847b8;
  font-size: 1.5rem;
  font-family: oswald, sans-serif;
  margin-top: 12px;
`;

const ContentsText = styled.div`
  margin-top: 18px;
  color: #808080;
  font-style: italic;
  line-height: 160%;
`;

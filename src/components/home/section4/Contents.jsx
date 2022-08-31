import styled from 'styled-components';

function Contents() {
  return (
    <ContentsWrapper>
      <Title>What We Do</Title>
      <Text>Sample text. Click to select the text box. Click again or double click to start editing the text.</Text>
      <Button>CONTACT US</Button>
      <ImageSource>Image from Freepik</ImageSource>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  background-color: #1847b8;
  width: 889px;
  height: 368px;
  margin: 0 30px 0 auto;
  padding: 30px 30px 30px 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 3.75rem;
  font-family: roboto-condensed, sans-serif;
  font-weight: normal;
  line-height: 110%;
`;

const Text = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 240px;
  height: 49px;
  margin-top: 20px;
  border: solid 2px #fff;
  color: inherit;
  letter-spacing: 2px;

  &:hover {
    background-color: #fff;
    color: #1847b8;
  }
`;

const ImageSource = styled.div`
  margin-top: 20px;
  font-size: 1.125rem;
  line-height: 160%;
  font-weight: lighter;
`;

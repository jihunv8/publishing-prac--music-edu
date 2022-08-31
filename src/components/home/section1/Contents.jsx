import styled from 'styled-components';

import _ReadMoreButton from '../common-styled/ReadMoreButton.styled';

function Contents() {
  return (
    <ContentsWrapper>
      <SubTitle>MODERN&#38; FUN</SubTitle>
      <Title>ONLINE MUSIC EDUCATION</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
      <ImageSource>Image by Freepik</ImageSource>
      <ReadMoreButton>READ MORE</ReadMoreButton>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  padding: 30px 50px 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 53;
  flex-basis: 0;
`;

const SubTitle = styled.div`
  width: 238px;
  height: 54px;
  background-color: #1847b8;
  color: #fff;
  letter-spacing: 0.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Title = styled.h2`
  color: #1847b8;
  font-size: 4.25rem;
  font-weight: bold;
  font-family: roboto-condensed, sans-serif;
  line-height: 110%;
  margin-top: 18px;
`;

const Text = styled.p`
  margin-top: 23px;
  line-height: 160%;
  font-size: 1.125rem;
`;

const ImageSource = styled.p`
  margin-top: 23px;
`;

const ReadMoreButton = styled(_ReadMoreButton)`
  margin-top: 34px;
`;

import styled from 'styled-components';
import _ReadMoreButton from '../common-styled/ReadMoreButton.styled';

function Contents() {
  return (
    <ContentsWrapper>
      <Title>Music School</Title>
      <Text>
        Tristique magna sit amet purus gravida quis blandit turpis cursus. Hendrerit gravida rutrum quisque non tellus
        orci ac auctor augue. Rhoncus dolor purus non enim praesent elementum facilisis leo.
      </Text>
      <ImageSource>Image from Freepik</ImageSource>
      <ReadMoreButton>READ MORE</ReadMoreButton>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  background-color: #fff;
  padding: 30px 50px;
  width: 651px;
  height: 484px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 570px;
`;

const Title = styled.h2`
  color: #1847b8;
  font-family: roboto-condensed, sans-serif;
  font-size: 3.75rem;
  font-weight: bold;
  line-height: 120%;
`;

const Text = styled.p`
  margin-top: 32px;
  color: #111111;
  font-size: 1.25rem;
  font-style: italic;
  line-height: 180%;
`;

const ImageSource = styled.p`
  margin-top: 20px;
  color: #111111;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 160%;
`;

const ReadMoreButton = styled(_ReadMoreButton)`
  margin-top: 20px;
`;

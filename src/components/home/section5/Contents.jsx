import styled from 'styled-components';
import _ReadMoreButton from '../common-styled/ReadMoreButton.styled.js';

function Contents() {
  return (
    <ContentsWrapper>
      <Title>Performances &#38; Activities</Title>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <ImageSource>Images from Freepik</ImageSource>
      <ReadMoreButton>READ MORE</ReadMoreButton>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  background-color: #fff;
  width: 584px;
  padding: 30px 50px 56px;
`;

const Title = styled.h2`
  margin-top: 18px;
  color: #1847b8;
  font-size: 3.75rem;
  font-weight: normal;
  font-family: oswald, sans-serif;
  line-height: 110%;
`;

const Text = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;

const ImageSource = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;

const ReadMoreButton = styled(_ReadMoreButton)`
  margin-top: 20px;
`;

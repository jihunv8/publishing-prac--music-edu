import styled from 'styled-components';
import { ContentsWrapper } from './ContentsWrapper.styled';

import image from '../../../images/44720b5f-d674-4089-b6ec-12c44ea13947.jpg';

function RightContents() {
  return (
    <RightContentsWrapper>
      <ContentsContainer>
        <Image />
        <Title>TOP RANKED PROGRAM</Title>
        <Text>
          ​In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus.
          Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id
          cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed.
        </Text>
        <ImageSource>Image by Freepik</ImageSource>
      </ContentsContainer>
    </RightContentsWrapper>
  );
}

export default RightContents;

const RightContentsWrapper = styled(ContentsWrapper)`
  padding-left: 15px;
`;

const ContentsContainer = styled.div`
  height: 747px;
  padding-left: 142px;
  padding-bottom: 30px;
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  width: 328px;
  height: 402px;
`;

const Title = styled.h3`
  margin-top: 20px;
  color: #1847b8;
  font-family: oswald, sans-serif;
  font-size: 1.5rem;
  line-height: 120%;
`;

const Text = styled.p`
  margin-top: 71px;
  color: #111111;
  line-height: 160%;
`;

const ImageSource = styled.p`
  margin-top: 20px;
  color: #111111;
  line-height: 160%;
`;

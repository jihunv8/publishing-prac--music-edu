import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize.js';
import image from '../../../images/jj.jpg';

import Contents from './Contents.jsx';

function Section4() {
  return (
    <Section4Wrapper>
      <ContentsContainer>
        <Contents />
        <Image />
        <Circle />
      </ContentsContainer>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section``;

const ContentsContainer = styled.div`
  width: ${contentsAreaXLarge};
  position: relative;
  margin: 0 auto;
  padding: 60px 0;
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  width: 507px;
  height: 507px;
  margin: -307px auto 0 30px;
  border-radius: 100%;
`;

const Circle = styled.div`
  background-color: #a9c0f8;
  width: 228px;
  height: 228px;
  border-radius: 100%;
  margin: -110px 361px 0 auto;
`;

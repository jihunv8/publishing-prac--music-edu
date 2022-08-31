import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';

import Contents from './Contents';

import image from '../../../images/man-min.jpg';
import background from '../../../images/ww.jpg';

function Section1() {
  return (
    <Section1Wrapper>
      <ContentsArea>
        <Image />
        <Contents />
      </ContentsArea>
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section`
  background: url(${background}) no-repeat center / cover;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  display: flex;
`;

const Image = styled.div`
  height: 691px;
  background: url(${image}) no-repeat center / cover;
  flex-grow: 47;
  flex-basis: 0px;
`;

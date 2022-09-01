import styled from 'styled-components';
import {
  contentsAreaXLarge,
  contentsAreaLarge,
  contentsAreaMiddle,
  contentsAreaSmall,
  contentsAreaXSmall,
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '../../../global-style/style-util/mediaSize';

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
  height: 691px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
    height: 570px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: ${contentsAreaMiddle};
    height: 535px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: ${contentsAreaSmall};
    height: 1194px;
    flex-direction: column;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: ${contentsAreaXSmall};
    height: 1078px;
  }
`;

const ImageContainer = styled.div`
  flex-grow: 47;
  flex-basis: 0;

  @media screen and (max-width: ${screenMiddle}) {
    flex-grow: 55;
  }

  @media screen and (max-width: ${screenSmall}) {
    order: 1;
  }
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  flex-grow: 47;
  flex-basis: 0;

  @media screen and (max-width: ${screenMiddle}) {
    flex-grow: 55;
  }

  @media screen and (max-width: ${screenSmall}) {
    order: 1;
  }
`;

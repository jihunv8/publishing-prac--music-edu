import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';

import Contents from './Contents';

import image from '../../../images/bnbnbn.jpg';

function Section7() {
  return (
    <Section7Wrapper>
      <ContentsArea>
        <Shape1 />
        <Image />
        <Shape2 />
        <Contents />
      </ContentsArea>
    </Section7Wrapper>
  );
}

export default Section7;

const Section7Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding-bottom: 70px;
  position: relative;
`;

const Shape1 = styled.div`
  background-color: #1847b8;
  width: 806px;
  height: 70px;
  margin-left: auto;
  margin-right: 122px;
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  width: 1009px;
  height: 570px;
  margin-left: auto;
  margin-right: 0;
`;

const Shape2 = styled.div`
  background-color: #6b93f2;
  width: 570px;
  height: 476px;
  margin: 0 auto;
`;

import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize.js';
import backImage from '../../../images/vbvf-min.jpg';
import frontImage from '../../../images/estyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-.jpg';

import Contents from './Contents.jsx';

function Section5() {
  return (
    <Section5Wrapper>
      <BackShape />
      <ContentsArea>
        <BackImage />
        <ContentsContainer>
          <Contents />
          <FrontImage />
        </ContentsContainer>
      </ContentsArea>
    </Section5Wrapper>
  );
}

export default Section5;

const Section5Wrapper = styled.section`
  background-color: #e9effd;
  position: relative;
`;

const BackShape = styled.div`
  background-color: #1847b8;
  height: 800px;
  margin: 0 0 0 50%;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  padding: 88px 0 60px;
  margin: -800px auto 0;
`;

const BackImage = styled.div`
  background: url(${backImage}) no-repeat center / cover;
  width: 935px;
  height: 551px;
`;

const ContentsContainer = styled.div`
  padding-left: 103px;
  padding-right: 60px;
  margin-top: -190px;
  display: flex;
  align-items: flex-end;
`;

const FrontImage = styled.div`
  margin-left: 50px;
  background: url(${frontImage}) no-repeat center / cover;
  height: 364px;
  flex-grow: 1;
`;

import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';
import LeftContents from './LeftContents';
import RightContent from './RightContents';

function Section8() {
  return (
    <Section8Wrapper>
      <ContentsArea>
        <LeftContents />
        <RightContent />
      </ContentsArea>
    </Section8Wrapper>
  );
}

export default Section8;

const Section8Wrapper = styled.section`
  background-color: #e9effd;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding: 58px 0;
  display: flex;
`;

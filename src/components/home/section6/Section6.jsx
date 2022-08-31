import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';
import LeftContents from './LeftContents';
import RightContent from './RightContent';

function Section6() {
  return (
    <Section6Wrapper>
      <ContentsArea>
        <LeftContents />
        <RightContent />
      </ContentsArea>
    </Section6Wrapper>
  );
}

export default Section6;

const Section6Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
`;

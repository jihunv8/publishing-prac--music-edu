import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';

import Contents from './Contents';

const mockText =
  '​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.';

function Section3() {
  return (
    <Section3Wrapper>
      <ContentsArea>
        <Header>
          <Title>Music Education</Title>
          <Description>
            The beauty of running is that it can be done in a variety of places, by people of all abilities, at
            distances both short and long.
          </Description>
        </Header>
        <EducationContentsList>
          <Contents title="Students" text={mockText} />
          <Contents title="Programs" text={mockText} />
          <Contents title="Music" text={mockText} />
          <Contents title="Psychology" text={mockText} />
        </EducationContentsList>
      </ContentsArea>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  background-color: #e9effd;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #1847b8;
  font-size: 3.75rem;
  font-family: oswald, sans-serif;
  font-weight: normal;
  line-height: 110%;
`;

const Description = styled.div`
  width: 720px;
  margin-top: 20px;
  line-height: 160%;
  text-align: center;
`;

const EducationContentsList = styled.div`
  margin-top: 40px;
  display: flex;
`;

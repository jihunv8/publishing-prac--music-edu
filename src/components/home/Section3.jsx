import styled from 'styled-components';

const Section3Wrapper = styled.section`
  background-color: #e9effd;
`;

const ContentsContainer = styled.div`
  width: ${({ theme }) => theme.mediaSize.contentsArea.xLarge};
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

const EducationContentWrapper = styled.div`
  height: 268px;
  padding: 10px 40px 20px;
  flex-basis: 0;
  flex-grow: 1;
`;

const Box = styled.div`
  width: 41px;
  height: 8px;
  background-color: #a9c0f8;
`;

const ContentTitle = styled.h3`
  color: #1847b8;
  font-size: 1.5rem;
  font-family: oswald, sans-serif;
  margin-top: 12px;
`;

const ContentText = styled.div`
  margin-top: 18px;
  color: #808080;
  font-style: italic;
  line-height: 160%;
`;

function EducationContent() {
  return (
    <EducationContentWrapper>
      <Box />
      <ContentTitle>Students</ContentTitle>
      <ContentText>
        ​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere
        urna nec tincidunt praesent semper feugiat nibh sed.
      </ContentText>
    </EducationContentWrapper>
  );
}

function Section3() {
  return (
    <Section3Wrapper>
      <ContentsContainer>
        <Header>
          <Title>Music Education</Title>
          <Description>
            The beauty of running is that it can be done in a variety of places, by people of all abilities, at
            distances both short and long.
          </Description>
        </Header>
        <EducationContentsList>
          <EducationContent />
          <EducationContent />
          <EducationContent />
          <EducationContent />
        </EducationContentsList>
      </ContentsContainer>
    </Section3Wrapper>
  );
}

export default Section3;

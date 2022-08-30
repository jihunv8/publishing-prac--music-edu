import styled from 'styled-components';

import musicTherapyIcon from '../../images/icons/music-therapy.png';
import ourMissionIcon from '../../images/icons/our-mission.png';
import musicCampsIcon from '../../images/icons/music-camps.png';
import libraryIcon from '../../images/icons/library.png';

const Section2Wrapper = styled.section`
  background-color: #1847b8;
`;
const ContentsContainer = styled.div`
  width: ${({ theme }) => theme.mediaSize.contentsArea.xLarge};
  margin: 0 auto;
  display: flex;
`;

const ContentWrapper = styled.div`
  height: 571px;
  margin: 60px 0;
  padding: ${({ isDown }) => (isDown ? '160px 20px 26px' : '30px 20px')};
  flex-grow: 25;
  flex-basis: 0;
`;

const ContentIcon = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a9c0f8;
  border-radius: 100%;

  > img {
    width: 38px;
    height: 38px;
  }
`;

const ContentTitle = styled.h2`
  margin-top: 30px;
  color: #fff;
  font-size: 1.5rem;
  font-family: oswald, sans-serif;
  line-height: 120%;
`;

const ContentText = styled.div`
  margin-top: 20px;
  color: #fff;
  line-height: 160%;
`;

function Content({ isDown = false, icon = '', iconAlt = '', title = '', text = '' }) {
  return (
    <ContentWrapper isDown={isDown}>
      <ContentIcon>
        <img src={icon} alt={iconAlt} />
      </ContentIcon>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{text}</ContentText>
    </ContentWrapper>
  );
}

const mockText =
  '​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.';

function Section2() {
  return (
    <Section2Wrapper>
      <ContentsContainer>
        <Content icon={musicTherapyIcon} iconAlt="music therapy" title="MUSIC THERAPY" text={mockText} />
        <Content icon={ourMissionIcon} iconAlt="Our Mission" title="OUR MISSION" text={mockText} isDown />
        <Content icon={musicCampsIcon} iconAlt="" title="MUSIC CAMPS" text={mockText} />
        <Content icon={libraryIcon} iconAlt="" title="LIBRARY" text={mockText} isDown />
      </ContentsContainer>
    </Section2Wrapper>
  );
}

export default Section2;

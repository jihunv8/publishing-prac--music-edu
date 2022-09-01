import styled from 'styled-components';

import Contents from './Contents';

import musicTherapyIcon from '../../../images/icons/music-therapy.png';
import ourMissionIcon from '../../../images/icons/our-mission.png';
import musicCampsIcon from '../../../images/icons/music-camps.png';
import libraryIcon from '../../../images/icons/library.png';
import * as mediaSize from '../../../global-style/style-util/mediaSize';

const mockText =
  '​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.';

function Section2() {
  return (
    <Section2Wrapper>
      <ContentsArea>
        <Contents icon={musicTherapyIcon} iconAlt="music therapy" title="MUSIC THERAPY" text={mockText} />
        <Contents icon={ourMissionIcon} iconAlt="Our Mission" title="OUR MISSION" text={mockText} isDown />
        <Contents icon={musicCampsIcon} iconAlt="" title="MUSIC CAMPS" text={mockText} />
        <Contents icon={libraryIcon} iconAlt="" title="LIBRARY" text={mockText} isDown />
      </ContentsArea>
    </Section2Wrapper>
  );
}

export default Section2;

const Section2Wrapper = styled.section`
  background-color: #1847b8;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;
  display: flex;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;

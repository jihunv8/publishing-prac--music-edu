import styled from 'styled-components';

import * as mediaSize from '../../../global-style/style-util/mediaSize';

import Content from './Content';
import image from '../../../images/jkjk.jpg';

function RightContent() {
  return (
    <RightContentWrapper>
      <Image />
      <Content
        title="goals"
        text="In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus. Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed. Sollicitudin ac orci phasellus egestas tellus. Id velit ut tortor pretium."
      />
    </RightContentWrapper>
  );
}

export default RightContent;

const RightContentWrapper = styled.div`
  padding: 0 30px 25px;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  width: 240px;
  height: 299px;
  margin: 115px 0 95px;
  align-self: flex-end;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    margin-top: 0;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    margin-bottom: 153px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 265px;
    margin-bottom: 60px;
  }
`;

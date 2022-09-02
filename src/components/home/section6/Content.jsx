import styled from 'styled-components';
import * as mediaSize from '../../../global-style/style-util/mediaSize';

import ContentText from './ContentText';
import ContentTitle from './ContentTitle';

function Content({ title = '', text = '', alignRight = false }) {
  return (
    <ContentWrapper alignRight={alignRight}>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{text}</ContentText>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  width: 430px;
  ${({ alignRight }) => alignRight && 'align-self:flex-end'};

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${({ alignRight }) => (alignRight ? '350px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${({ alignRight }) => (alignRight ? '250px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${({ alignRight }) => (alignRight ? '470px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${({ alignRight }) => (alignRight ? '265px' : '100%')};
  }
`;

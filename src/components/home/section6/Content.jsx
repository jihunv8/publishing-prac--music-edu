import styled from 'styled-components';
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
`;

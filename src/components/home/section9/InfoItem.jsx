import styled from 'styled-components';

function InfoItem({ title = '', content = '' }) {
  return (
    <InfoItemWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </InfoItemWrapper>
  );
}

export default InfoItem;

const InfoItemWrapper = styled.div`
  padding: 45px 30px 15px;
  flex-grow: 1;
  flex-basis: 0;
`;

const Title = styled.h3`
  padding-top: 20px;
  padding-left: 40px;
  color: #1847b8;
  font-family: oswald, sans-serif;
  font-size: 1.25rem;
  line-height: 120%;
`;

const Content = styled.p`
  margin-top: 20px;
  line-height: 160%;
`;

import styled from 'styled-components';

function ContentText({ children }) {
  return <ContentTextWrapper>{children}</ContentTextWrapper>;
}

export default ContentText;

const ContentTextWrapper = styled.div`
  color: #111111;
  margin-top: 20px;
  line-height: 160%;
  font-family: Montserrat, sans-serif;
`;

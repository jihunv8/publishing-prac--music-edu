import styled from 'styled-components';
import { ContentsWrapper } from './ContentsWrapper.styled';

function LeftContents() {
  return (
    <LeftContentsWrapper>
      <ContentsContaniner>
        <Title>Music psychology and conducting pedagogy</Title>
      </ContentsContaniner>
    </LeftContentsWrapper>
  );
}

export default LeftContents;

const LeftContentsWrapper = styled(ContentsWrapper)`
  padding-right: 15px;
`;

const ContentsContaniner = styled.div`
  background-color: #1847b8;
  height: 747px;
  padding: 30px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 3.75rem;
  font-family: oswald, sans-serif;
  line-height: 120%;
`;

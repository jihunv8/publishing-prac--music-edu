import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/style-util/mediaSize';

import image from '../../../images/wqe-min.jpg';
import ContactForm from './ContactForm';
import Information from './Information';

function Section9() {
  return (
    <Section9Wrapper>
      <ContentsArea>
        <ContactForm />
        <Image />
        <Information />
      </ContentsArea>
    </Section9Wrapper>
  );
}

export default Section9;

const Section9Wrapper = styled.section`
  background-color: #1847b8;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding: 80px 0;
`;

const Image = styled.div`
  background: url(${image}) no-repeat center / cover;
  width: 570px;
  height: 698px;
  margin-top: -481px;
`;

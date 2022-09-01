import styled from 'styled-components';

import Header from '../components/common/Header';
import Section1 from '../components/home/section1/Section1';
import Section2 from '../components/home/section2/Section2';
import Section3 from '../components/home/section3/Section3';
import Section4 from '../components/home/section4/Section4';
import Section5 from '../components/home/section5/Section5';
import Section6 from '../components/home/section6/Section6';
import Section7 from '../components/home/section7/Section7';

const HomeWrapper = styled.div``;

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </HomeWrapper>
  );
}

export default Home;

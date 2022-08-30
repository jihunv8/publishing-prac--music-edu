import styled from 'styled-components';

import Header from '../components/common/Header';
import Section1 from '../components/home/Section1';

const HomeWrapper = styled.div``;

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
    </HomeWrapper>
  );
}

export default Home;

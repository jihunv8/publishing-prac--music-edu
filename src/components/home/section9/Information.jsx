import styled from 'styled-components';

import InfoItem from './InfoItem';

function Information() {
  return (
    <InformationWrapper>
      <InfoItem title="CALL US" content="1 (234) 567-891, 1 (234) 987-654" />
      <InfoItem title="LOCATION" content="121 Rock Sreet, 21 Avenue, New York, NY 92103-9000" />
      <InfoItem title="BUSINESS HOURS" content="Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed" />
    </InformationWrapper>
  );
}

export default Information;

const InformationWrapper = styled.div`
  background-color: #e9effd;
  width: 976px;
  margin: -119px 28px 0 auto;
  display: flex;
`;

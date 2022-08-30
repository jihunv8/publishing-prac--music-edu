import styled from 'styled-components';

import image from '../../images/man-min.jpg';
import background from '../../images/ww.jpg';

const Section1Wrapper = styled.section`
  background: url(${background}) no-repeat;
  background-size: cover;
`;
const ContentsContaniner = styled.div`
  width: ${({ theme }) => theme.mediaSize.contentsArea.xLarge};
  height: 691px;
  margin: 0 auto;
  display: flex;
`;

const Image = styled.div`
  width: 0px;
  background: url(${image}) no-repeat center / cover;
  flex-grow: 47;
  flex-basis: 0px;
`;

const Contents = styled.div`
  width: 0px;
  padding: 30px 50px 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 53;
  flex-basis: 0px;

  > .text-box {
    width: 238px;
    height: 54px;
    background-color: #1847b8;
    color: #fff;
    letter-spacing: 0.3125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
  }

  > .title {
    color: #1847b8;
    font-size: 4.25rem;
    font-weight: bold;
    font-family: roboto-condensed, sans-serif;
    line-height: 110%;
    margin-top: 18px;
  }

  > .text {
    margin-top: 23px;
    line-height: 160%;
    font-size: 1.125rem;
  }

  > .image-source {
    margin-top: 23px;
  }

  > .read-more-btn {
    width: 238px;
    height: 50px;
    margin-top: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1875rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #1847b8;

    &:hover {
      background-color: #1847b8;
      color: #fff;
    }
  }
`;

function Section1() {
  return (
    <Section1Wrapper>
      <ContentsContaniner>
        <Image />
        <Contents>
          <div className="text-box">MODERN&#38; FUN</div>
          <h2 className="title">ONLINE MUSIC EDUCATION</h2>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
          <div className="image-source">Image by Freepik</div>
          <button className="read-more-btn">READ MORE</button>
        </Contents>
      </ContentsContaniner>
    </Section1Wrapper>
  );
}

export default Section1;

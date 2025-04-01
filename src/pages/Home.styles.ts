import styled from 'styled-components';
import backgroundTooth from '../assets/images/background-tooth.png';

export const Main = styled.main``;

export const Section = styled.section`
  background-image: url(${backgroundTooth});
  background-size: 15%;
  background-repeat: repeat;
  height: 103px;

  @media (max-width: 700px) {
    height: 82.55px;
    background-size: 25%;
  }

  @media (max-width: 600px) {
    height: 68.78px;
    background-size: 30%;
  }
`;

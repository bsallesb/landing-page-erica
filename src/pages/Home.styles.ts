import styled from 'styled-components';
import backgroundTooth from '../assets/images/background-tooth.png';

export const Main = styled.main`
  background-image: url(${backgroundTooth});
  background-size: 10%;
  background-repeat: repeat;
  padding-top: 103px;

  @media (max-width: 700px) {
    padding-top: 82.55px;
  }

  @media (max-width: 600px) {
    padding-top: 68.78px;
  }
`;

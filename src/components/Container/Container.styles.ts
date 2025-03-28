import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 0px 20px;
  justify-content: center;

  @media (max-width: 510px) {
    width: 95%;
    padding: 2px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 900px;
  }

  @media (min-width: 1441px) {
    max-width: 1400px;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: center;
  align-items: start;
  padding: 30px 35px 45px 35px;
  width: 100%;
  border-radius: 20px;
  background-color: var(--light);

  h2 {
    margin-bottom: 30px;
    text-align: start;
    font-size: 48px;

    @media (max-width: 1068px) {
      font-size: 42px;
    }

    @media (max-width: 580px) {
      font-size: 34px;
    }
  }
`;

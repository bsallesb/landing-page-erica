import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--light-alt);
  padding-block: 50px;

  > div {
    gap: 20px;

    @media (max-width: 1135px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 1135px) {
    width: 100%;
  }
`;

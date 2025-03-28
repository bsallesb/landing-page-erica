import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 40px;

  > div {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-inline: 15px;

    div:nth-child(1) {
      order: 2;
    }

    img:nth-child(2) {
      order: 1;
    }

    @media (max-width: 1175px) {
      flex-direction: column;
      gap: 24px;

      div:nth-child(1) {
        order: 1;
      }

      img:nth-child(2) {
        order: 2;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: start;

  @media (max-width: 1175px) {
    align-items: center;
    gap: 24px;
  }

  h2 {
    font-size: 48px;
    text-align: start;

    @media (max-width: 1175px) {
      text-align: center;
    }

    @media (max-width: 1068px) {
      font-size: 42px;
    }

    @media (max-width: 580px) {
      font-size: 34px;
    }
  }
`;

export const Paragraph = styled.p`
  color: var(--secondary);
  font-size: 20px;
  padding-right: 50px;
  max-width: 900px;

  @media (max-width: 1175px) {
    text-align: center;
    padding-inline: 5px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  @media (max-width: 600px) {
    max-width: 45%;
  }

  @media (max-width: 1175px) {
    max-width: 90%;
  }
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1175px) {
    align-items: center;
  }
`;

export const Icon = styled.a`
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: var(--primary);
  }
`;

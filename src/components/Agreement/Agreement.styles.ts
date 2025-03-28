import styled from 'styled-components';

export const Content = styled.section`
  background-color: var(--primary);
  padding: 60px 15px;
  width: 100%;

  @media (max-width: 790px) {
    padding: 40px 15px;
  }
`;

export const WebBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    justify-items: center;

    span {
      text-align: center;
    }
  }

  @media (max-width: 790px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: none;

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    gap: 18px;

    img {
      width: 150px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }
`;

export const Label = styled.h3`
  font-size: 44px;
  font-weight: 800;
  color: var(--light);
  text-align: center;
`;

export const Information = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: var(--light);
  width: 315px;

  @media (max-width: 790px) {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }
`;

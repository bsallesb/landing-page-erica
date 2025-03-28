import styled from 'styled-components';

type SectionType = {
  image: string;
};

export const Section = styled.section<SectionType>`
  display: flex;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center left;
  justify-content: space-between;
  width: 100%;
  height: 200px;

  @media (max-width: 1441px) {
    height: 120px;
  }

  > div {
    justify-content: end;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  width: 70%;
  justify-content: space-between;

  button {
    text-wrap-mode: nowrap;
  }

  @media (max-width: 672px) {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 500px) {
    align-items: end;

    button {
      font-size: 14px;

      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export const Label = styled.h3`
  color: var(--light);
  font-size: 40px;

  @media (max-width: 1441px) {
    font-size: 34px;
  }

  @media (max-width: 920px) {
    font-size: 24px;
  }

  @media (max-width: 760px) {
    font-size: 20px;
  }

  @media (max-width: 672px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const LabelContent = styled.div`
  width: 360px;

  @media (max-width: 1441px) {
    width: 310px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: end;
    width: 280px;
  }
`;

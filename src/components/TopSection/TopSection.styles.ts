import styled from 'styled-components';

export const RelativeContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  @media (min-width: 960px) {
    position: relative;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;

    img {
      width: 550px;
    }
  }

  @media (max-width: 580px) {
    img {
      width: calc(100% - 5px);
    }
  }
`;

type SectionType = {
  $image: string;
  $mobileImage: string;
};

export const Section = styled.section<SectionType>`
  display: flex;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center right;
  justify-content: space-between;
  width: 100%;
  height: 800px;

  @media (max-width: 1441px) {
    height: 700px;
  }

  @media (max-width: 1090px) {
    height: 600px;
  }

  @media (max-width: 960px) {
    background-image: ${({ $mobileImage }) => `url(${$mobileImage})`};
    height: 920px;
  }

  @media (max-width: 580px) {
    height: 835px;
  }

  @media (max-width: 460px) {
    height: 780px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;

  @media (min-width: 960px) {
    position: absolute;
    width: 57%;
    top: 130px;
    left: 0;
  }

  @media (max-width: 960px) {
    align-items: center;
    gap: 40px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;

  @media (max-width: 960px) {
    text-align: center;
    align-items: center;
    max-width: 435px;
  }
`;

export const Paragraph = styled.h2`
  font-size: 72px;
  font-weight: 800;
  color: var(--secondary);

  span {
    color: var(--primary);
  }

  @media (max-width: 1440px) {
    font-size: 64px;
  }

  @media (max-width: 1270px) {
    font-size: 56px;
  }

  @media (max-width: 1068px) {
    font-size: 46px;
  }

  @media (max-width: 460px) {
    font-size: 38px;
  }
`;

export const Span = styled.span`
  color: var(--secondary);
  font-size: 30px;
  max-width: 500px;

  @media (max-width: 1440px) {
    font-size: 27px;
  }

  @media (max-width: 1270px) {
    font-size: 24px;
    max-width: 445px;
  }

  @media (max-width: 1068px) {
    font-size: 20px;
    max-width: 320px;
  }
`;

import styled, { css } from 'styled-components';

type SectionType = {
  image: string;
};

export const Section = styled.section<SectionType>`
  display: flex;
  position: sticky;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center right;
  margin-top: -20px;
  border-radius: 25px 25px 0 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 40px 0px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  border-radius: 20px;
  padding: 36px 28px 50px 28px;
  gap: 16px;
  max-width: 420px;
  height: 100%;

  img {
    margin-bottom: 20px;
  }

  @media (max-width: 1210px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Label = styled.h3`
  font-size: 40px;
  font-weight: 800;
  color: var(--primary);

  @media (max-width: 1505px) {
    font-size: 32px;
  }

  @media (max-width: 1210px) {
    font-size: 28px;
  }

  @media (max-width: 1050px) {
    font-size: 32px;
  }

  @media (max-width: 840px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: var(--secondary);

  @media (max-width: 1505px) {
    font-size: 22px;
  }

  @media (max-width: 1210px) {
    font-size: 18px;
  }

  @media (max-width: 1050px) {
    font-size: 22px;
  }

  @media (max-width: 840px) {
    font-size: 20px;
  }
`;

export const Carrossel = styled.div`
  display: flex;
  gap: 20px;

  .swiper-slide {
    justify-items: center;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    border-radius: 4px;
    background-color: var(--light);
  }

  .swiper-pagination {
    position: absolute;
    bottom: 10px; /* Coloca a paginação na parte inferior */
    left: 50%;
    transform: translateX(-50%);
    z-index: 10; /* Garante que a paginação fique sobre outros elementos */
  }
`;

type CircleType = {
  margin?: boolean;
};

export const Circle = styled.div<CircleType>`
  background: linear-gradient(to left, var(--primary), var(--primary-alt));
  border-radius: 90px;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 0;

    ${({ margin }) =>
      margin &&
      css`
        margin-left: 5px;
      `}
  }
`;

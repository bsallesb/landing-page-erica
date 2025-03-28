import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to right, var(--primary-alt), var(--primary));
  border-radius: 10px;
  padding-top: 40px;
  margin-bottom: 40px;

  > div {
    width: 100%;
  }

  h2 {
    margin-bottom: 44px;
  }
`;

type CardProps = {
  isActive?: boolean;
};

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--light);
  padding: 24px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const Label = styled.h3`
  color: var(--primary);
  font-size: 24px;
  font-weight: 800;
  text-align: end;
`;

export const Description = styled.p`
  color: var(--primary);
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 1175px) {
    font-size: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: end;
`;

export const Wrapper = styled.div`
  .swiper {
    height: 100%;
  }

  .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    transform: scale(0.5);
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background-color: #fff;
    font-weight: 800;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    color: var(--primary);
  }
`;

export const Icon = styled.div`
  color: var(--primary-alt);
  min-width: 80px;
`;

export const ToothBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const RateBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 35px;
  align-items: center;

  a {
    background-color: var(--light);
    padding: 10px 15px;
    border-radius: 10px 0 9px 0;
    color: var(--primary);
    font-weight: 800;
    text-decoration: none;

    svg {
      margin-left: 8px;
    }
  }
`;

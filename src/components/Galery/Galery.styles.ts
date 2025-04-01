import styled from 'styled-components';

export const Paragraph = styled.p`
  color: var(--secondary);
  font-size: 20px;
  max-width: 900px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    transform: scale(0.5);
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background-color: var(--light-alt);
    font-weight: 800;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    color: var(--primary);
  }

  .swiper-button-prev {
    left: -14px;
  }
  .swiper-button-next {
    right: -14px;
  }
`;

type ImageProps = {
  $img: string;
};

export const Image = styled.div<ImageProps>`
  background-image: ${({ $img }) => `url(${$img})`};
  background-size: cover;
  background-position: center center;
  height: 0;
  padding-top: 100%;
  width: 100%;
`;

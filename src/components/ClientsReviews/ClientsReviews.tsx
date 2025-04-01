/* eslint-disable max-len */
import React, { Fragment, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Card,
  Content,
  Description,
  Label,
  Info,
  Wrapper,
  Icon,
  ToothBox,
  RateBox,
  Section,
} from './ClientsReviews.styles';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { IconMap } from '../../assets/icons/Icons';
import { reviews } from '../../constants/reviews';

const ClientsReviews: React.FC = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  };

  const starNumber = useCallback((stars: number) => {
    const totalStars = 5;

    return (
      <Fragment>
        {Array.from({ length: totalStars }, (_, index) =>
          index < stars ? IconMap.star : IconMap.emptyStar
        )}
      </Fragment>
    );
  }, []);

  return (
    <Section id="clients-reviews">
      <Container>
        <Content>
          <Title isTextWhite>O que os clientes dizem</Title>
          <Wrapper>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3.5}
              centeredSlides
              navigation
              initialSlide={2}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              breakpoints={breakpoints}
              autoplay={{ delay: 15000 }}
              speed={5000}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <Card>
                    <Description>
                      {review.description ?? (
                        <ToothBox>
                          {IconMap.tooth}
                          <p>Esta avaliação não possui descrição.</p>
                          <p>Apenas estrelinhas 🤩</p>
                        </ToothBox>
                      )}
                    </Description>
                    <Info>
                      <Icon>{starNumber(review.stars)}</Icon>
                      <Label>{review.name}</Label>
                    </Info>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrapper>
          <RateBox>
            <a
              href="https://www.google.com/search?q=Dra+%C3%89rica+Sales+varginha&oq=Dra+%C3%89rica+Sales+varginha&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBCDUyOThqMGo3qAIIsAIB8QVFH0iEVbcF5w&sourceid=chrome&ie=UTF-8#lrd=0x94ca93b1337bb9b3:0x10e55aefb76a9ff4,3,,,,"
              target="_blank"
              rel="noreferrer"
            >
              Me avalie clicando aqui {IconMap.RateReview}
            </a>
          </RateBox>
        </Content>
      </Container>
    </Section>
  );
};

export default ClientsReviews;

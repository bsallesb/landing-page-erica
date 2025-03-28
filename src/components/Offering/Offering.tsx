import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Container from '../Container/Container';
import serviceBackground from '../../assets/images/service-background.png';
import {
  Card,
  Carrossel,
  Circle,
  Content,
  Description,
  Label,
  Section,
} from './Offering.styles';
import Title from '../Title/Title';
import { services } from '../../constants/services';

const Offering: React.FC = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <Section image={serviceBackground} id="offering">
      <Container>
        <Content>
          <Title isTextWhite>
            O tratamento <span>ideal</span> para você!
          </Title>
          <Carrossel>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{ delay: 3000 }}
              speed={6000}
              loop
              allowTouchMove={true}
              breakpoints={breakpoints}
              draggable={true}
              touchRatio={1}
              simulateTouch={true}
              touchAngle={45}
              longSwipes={true}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <Card>
                    <Circle margin={service.label === 'Implante Dentário'}>
                      <img
                        src={service.icon}
                        alt="Icone de Clareamento"
                        width="100"
                        height="100"
                      />
                    </Circle>
                    <Label>{service.label}</Label>
                    <Description>{service.description}</Description>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </Carrossel>
        </Content>
      </Container>
    </Section>
  );
};

export default Offering;

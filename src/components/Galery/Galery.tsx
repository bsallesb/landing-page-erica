import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Content, Image, Paragraph } from './Galery.styles';
import ExploreBox from '../ExploreBox/ExploreBox';
import { photos } from '../../constants/galery';

const Galery: React.FC = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1135: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };

  return (
    <ExploreBox title="Galeria">
      <Paragraph>
        Confira nossa galeria de fotos e veja como transformamos sorrisos,
        promovendo saúde e bem-estar aos nossos pacientes.
      </Paragraph>
      <Content>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          initialSlide={0}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          autoplay={{ delay: 15000 }}
          breakpoints={breakpoints}
          speed={1000}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <Image $img={photo.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </ExploreBox>
  );
};

export default Galery;

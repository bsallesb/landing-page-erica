import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Content, Image, Paragraph } from './Galery.styles';
import ExploreBox from '../ExploreBox/ExploreBox';
// import photoOne from '../../assets/images/photo-one.jpeg';
// import photoTwo from '../../assets/images/photo-two.jpeg';
// import photoThree from '../../assets/images/photo-three.jpeg';
// import photoFour from '../../assets/images/photo-four.jpeg';
// import photoFive from '../../assets/images/photo-five.jpeg';
// import photoSix from '../../assets/images/photo-six.jpeg';
// import photoSeven from '../../assets/images/photo-seven.jpeg';
import photoEight from '../../assets/images/photo-eight.jpeg';
import photoNine from '../../assets/images/photo-nine.jpeg';
import photoTen from '../../assets/images/photo-ten.jpeg';
import photoEleven from '../../assets/images/photo-eleven.jpeg';
import photoTwelve from '../../assets/images/photo-twelve.jpeg';
import photoThirteen from '../../assets/images/photo-thirteen.jpeg';
import photoFourteen from '../../assets/images/photo-fourteen.jpeg';
import photoFifteen from '../../assets/images/photo-fifteen.jpeg';
import photoSixteen from '../../assets/images/photo-sixteen.jpeg';
import photoSeventeen from '../../assets/images/photo-seventeen.jpeg';
import photoEighteen from '../../assets/images/photo-eighteen.jpeg';
import photoNineteen from '../../assets/images/photo-nineteen.jpeg';

const Galery: React.FC = () => {
  const photos = [
    // {
    //   id: 1,
    //   img: photoOne,
    //   alt: 'photo',
    // },
    // {
    //   id: 2,
    //   img: photoTwo,
    //   alt: 'photo',
    // },
    // {
    //   id: 3,
    //   img: photoThree,
    //   alt: 'photo',
    // },
    // {
    //   id: 4,
    //   img: photoFour,
    //   alt: 'photo',
    // },
    // {
    //   id: 5,
    //   img: photoFive,
    //   alt: 'photo',
    // },
    // {
    //   id: 6,
    //   img: photoSix,
    //   alt: 'photo',
    // },
    // {
    //   id: 7,
    //   img: photoSeven,
    //   alt: 'photo',
    // },
    {
      id: 8,
      img: photoEight,
      alt: 'photo',
    },
    {
      id: 9,
      img: photoNine,
      alt: 'photo',
    },
    {
      id: 10,
      img: photoTen,
      alt: 'photo',
    },
    {
      id: 11,
      img: photoEleven,
      alt: 'photo',
    },
    {
      id: 12,
      img: photoTwelve,
      alt: 'photo',
    },
    {
      id: 13,
      img: photoThirteen,
      alt: 'photo',
    },
    {
      id: 14,
      img: photoFourteen,
      alt: 'photo',
    },
    {
      id: 15,
      img: photoFifteen,
      alt: 'photo',
    },
    {
      id: 16,
      img: photoSixteen,
      alt: 'photo',
    },
    {
      id: 17,
      img: photoSeventeen,
      alt: 'photo',
    },
    {
      id: 18,
      img: photoEighteen,
      alt: 'photo',
    },
    {
      id: 19,
      img: photoNineteen,
      alt: 'photo',
    },
  ];

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
              <Image img={photo.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </ExploreBox>
  );
};

export default Galery;

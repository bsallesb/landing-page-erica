import React from 'react';

import { Content, Wrapper } from './ExploreSection.styles';
import Container from '../Container/Container';
import Galery from '../Galery/Galery';
import Map from '../Map/Map';

const ExploreSection: React.FC = () => {
  return (
    <Wrapper id="explore-section">
      <Container>
        <Content>
          <Galery />
        </Content>
        <Content>
          <Map />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ExploreSection;

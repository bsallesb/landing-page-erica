import React, { Fragment } from 'react';

import Header from '../components/Header/Header';
import TopSection from '../components/TopSection/TopSection';
import Offering from '../components/Offering/Offering';
import Agreement from '../components/Agreement/Agreement';
import BioSection from '../components/BioSection/BioSection';
import ClientsReviews from '../components/ClientsReviews/ClientsReviews';
import Whatsapp from '../components/Whatsapp/Whatsapp';
import ExploreSection from '../components/ExploreSection/ExploreSection';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';
import { Main, Section } from './Home.styles';

const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Section />
        <TopSection />
        <Offering />
        <Agreement />
        <BioSection />
        <ClientsReviews />
        <Whatsapp />
        <ExploreSection />
        <Support />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Home;

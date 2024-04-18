import NewUtilitiesAwait from '@/components/Sections/NewUtilitiesAwait/NewUtilitiesAwait';
import WhyChooseSPONGE from '@/components/Sections/WhyChooseSponge/WhyChooseSponge';
import React from 'react';
import Banner from '@/components/Sections/Banner/Banner';
import Roadmap from '@/components/Sections/Roadmap/Roadmap';

const Home = () => {
  return (
    <div>
      <Banner />
      <Roadmap />
      <WhyChooseSPONGE />
      <NewUtilitiesAwait />
    </div>
  );
};

export default Home;

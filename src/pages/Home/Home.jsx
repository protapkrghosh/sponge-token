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
    </div>
  );
};

export default Home;

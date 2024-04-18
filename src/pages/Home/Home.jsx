import React from 'react';
import Banner from '@/components/Sections/Banner/Banner';
import Roadmap from '@/components/Sections/Roadmap/Roadmap';
import NewUtilitiesAwait from '@/components/Sections/NewUtilitiesAwait/NewUtilitiesAwait';
import WhyChooseSPONGE from '@/components/Sections/WhyChooseSponge/WhyChooseSponge';
import BuySpongeToken from '@/components/Sections/BuySpongeToken/BuySpongeToken';
import JoinSponge from '@/components/Sections/JoinSponge/JoinSponge';

const Home = () => {
  return (
    <div>
      <Banner />
      <BuySpongeToken />
      <Roadmap />
      <WhyChooseSPONGE />
      <NewUtilitiesAwait />
      <JoinSponge />
    </div>
  );
};

export default Home;

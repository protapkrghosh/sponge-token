import React from 'react';
import Container from '../Container/Container';
import JoinSpongeImg from '@/assets/JoinSponge/Ellipse 473.png';
import JoinSpongeborder from '@/assets/JoinSponge/div.elementor-background-overlay.png';

const JoinSponge = () => {
  return (
    <div className='xl:my-[140px]'>
      <Container>
        {/* main section  */}
        <div className='relative'>

          {/* image section  */}
          <div className='flex justify-around items-center'>
            <img src={JoinSpongeImg} alt="image" />
            <p className='text-[#FFF] font-TTRoundsNeue xl:text-[40px] font-bold lg:leading-[68px] xl:max-w-[564.758px] z-40'>JOIN $SPONGE AND LETS BARK OUR  WAY TO CRYPTO SPONGE TOGETHER!</p>
          </div>

          {/* moon section  */}
          <div className='joinSpongeMoon absolute xl:top-[15px] xl:left-[630px]' />

          {/* border section  */}
          <img className='xl:w-auto absolute xl:right-[-30px] xl:top-[70px]' src={JoinSpongeborder} alt="" />
          <img className='xl:w-auto absolute xl:left-[-50px] xl:top-[-40px]' src={JoinSpongeborder} alt="" />

        </div>

      </Container>
    </div>
  );
};

export default JoinSponge;
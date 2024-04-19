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
            <img className='2xl:w-auto z-40' src={JoinSpongeImg} alt="image" />
            <p className='text-[#FFF] font-TTRoundsNeue xl:text-[40px] font-bold lg:leading-[68px] 2xl:w-[40%] z-40'>JOIN $SPONGE AND LETS BARK OUR  WAY TO CRYPTO SPONGE TOGETHER!</p>
          </div>

          {/* moon section  */}
          <div className='joinSpongeMoon absolute 2xl:top-[15px] 2xl:left-[630px]' />

          {/* border section  */}
          <img className='2xl:w-auto absolute 2xl:right-[-30px] 2xl:top-[70px]' src={JoinSpongeborder} alt="" />
          <img className='2xl:w-auto absolute 2xl:left-[-50px] 2xl:top-[-40px]' src={JoinSpongeborder} alt="" />

        </div>

      </Container>
    </div>
  );
};

export default JoinSponge;
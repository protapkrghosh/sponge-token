import React from 'react';
import Container from '../Container/Container';
import JoinSpongeImg from '@/assets/JoinSponge/Ellipse 473.png';
import JoinSpongeborder from '@/assets/JoinSponge/div.elementor-background-overlay.png';

const JoinSponge = () => {
  return (
    <div className='xl:my-[140px] lg:my-[120px]'>
      <Container>
        {/* main section  */}
        <div className='relative'>

          {/* image section  */}
          <div className='flex justify-around items-center'>
            <img className='xl:w-auto lg:w-[35%] z-40' src={JoinSpongeImg} alt="image" />
            <p className='text-[#FFF] font-TTRoundsNeue xl:text-[40px] lg:text-[30px] font-bold lg:leading-[68px] lg:w-[45%] z-40'>JOIN $SPONGE AND LETS BARK OUR  WAY TO CRYPTO SPONGE TOGETHER!</p>
          </div>

          {/* moon section  */}
          <div className='joinSpongeMoon xl:h-[400px] lg:h-[300px] xl:w-[400px] lg:w-[300px] absolute 2xl:top-[2px] xl:top-[5px] lg:top-[-25px] 2xl:left-[510px] xl:left-[475px] lg:left-[375px]' />

          {/* border section  */}
          <img className='xl:w-auto absolute 2xl:right-[-50px] xl:right-[-50px] 2xl:top-[68px] xl:top-[68px]' src={JoinSpongeborder} alt="" />
          <img className='xl:w-auto absolute 2xl:left-[-50px] xl:left-[-50px] 2xl:top-[-55px] xl:top-[-55px] z-50' src={JoinSpongeborder} alt="" />

        </div>

      </Container>
    </div>
  );
};

export default JoinSponge;
import React from 'react';
import Container from '../Container/Container';
import JoinSpongeImg from '@/assets/JoinSponge/Ellipse 473.png';
import JoinSpongeborder from '@/assets/JoinSponge/div.elementor-background-overlay.png';

const JoinSponge = () => {
  return (
    <div className='xl:my-[140px] lg:my-[120px] my-[100px] relative'>
      <Container>
        {/* main section  */}
        <div className='relative'>

          {/* image section  */}
          <div className='lg:flex justify-around items-center'>
            <img className='lg:mx-0 mx-auto xl:w-auto lg:w-[32%] md:w-[45%] w-[85%] lg:mb-0 md:mb-16 mb-10 z-40' src={JoinSpongeImg} alt="image" />
            <p className='text-[#FFF] lg:text-start text-center font-TTRoundsNeue xl:text-[40px] lg:text-[30px] md:text-[30px] text-[20px] font-bold lg:leading-[68px] lg:w-[45%] z-40'>JOIN $SPONGE AND LETS BARK OUR  WAY TO CRYPTO SPONGE TOGETHER!</p>
          </div>

          {/* moon section  */}
          <div className='lg:block hidden joinSpongeMoon xl:h-[400px] lg:h-[300px] xl:w-[400px] lg:w-[300px] absolute 2xl:top-[2px] xl:top-[5px] lg:top-[5px] 2xl:left-[510px] xl:left-[475px] lg:left-[375px]' />

          {/* border section  */}
          <img className='lg:block hidden xl:w-auto lg:w-[40%] absolute 2xl:right-[-50px] xl:right-[-60px] lg:right-[-90px] 2xl:top-[68px] xl:top-[68px] lg:top-[38px]' src={JoinSpongeborder} alt="Image" />

          <img className='lg:block hidden xl:w-auto lg:w-[40%] absolute 2xl:left-[-50px] xl:left-[-50px] lg:left-[-30px] 2xl:top-[-55px] xl:top-[-55px] lg:top-[-40px] z-50' src={JoinSpongeborder} alt="Image" />
        </div>

        {/* joinShadow Shadow  */}
        {/* <div className='joinShadow w-[220px] h-[270px] absolute 2xl:left-[400px] 2xl:bottom-[-250px]' /> */}

        {/* <div className='joinShadow w-[220px] h-[270px] absolute 2xl:right-[40px] 2xl:bottom-[-400px]' /> */}
      </Container>
    </div>
  );
};

export default JoinSponge;
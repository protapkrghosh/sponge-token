import React from 'react';
import Container from '../Container/Container';
import JoinSpongeImg from '@/assets/JoinSponge/Ellipse 473.png';

const JoinSponge = () => {
  return (
    <div className='xl:my-[120px]'>
      <Container>
        {/* main section  */}
        <div>

          {/* image section  */}
          <div className='flex justify-around items-center'>
            <img src={JoinSpongeImg} alt="image" />
            <p className='text-[#FFF] font-TTRoundsNeue xl:text-[40px] font-bold lg:leading-[68px] xl:max-w-[564.758px]'>JOIN $SPONGE AND LETS BARK OUR  WAY TO CRYPTO SPONGE TOGETHER!</p>
          </div>

          <div className='joinSpongeMoon' />

        </div>

      </Container>
    </div>
  );
};

export default JoinSponge;
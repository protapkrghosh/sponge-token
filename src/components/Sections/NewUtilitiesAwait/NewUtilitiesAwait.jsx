import React from 'react';
import Container from '../Container/Container';

const NewUtilitiesAwait = () => {
  return (
    <div className='xl:mt-[180px]'>
      <Container>
        <div>
          {/* title section  */}
          <p className='text-[#FFF] text-center font-TTRoundsNeue text-[58px] font-bold leading-[75.4px] xl:mb-[90px]'>New <span className='text-[#FDF44E]'>Utilities</span> Await</p>

          {/* card section  */}
          <div className='grid grid-cols-3 gap-[30px]'>

            {/* 1 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>SPONGE Wear</p>
              <p className='newUtilitiesAwaitConten font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[271.18px]'>Effortlessly trade $SPONGE tokens on our decentralized exchange.</p>
            </div>

            {/* 2 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>SPONGE Raffle</p>
              <p className='text-[#EDEDED] font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[261.766px]'>Engage in thrilling raffle events with your $SPONGE tokens.</p>
            </div>

            {/* 3 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>Voting</p>
              <p className='text-[#EDEDED] font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[323.277px]'>Community's future by participating in important decisions using your $SPOINGE.</p>
            </div>

            {/* 4 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>SPONGE</p>
              <p className='text-[#EDEDED] font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[317px]'>Multiply your holdings by staking $SPONGE tokens and earning rewards.</p>
            </div>

            {/* 5 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>SPONGE Bridge</p>
              <p className='text-[#EDEDED] font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[322.051px]'>Connect $SPONGE with various blockchains for expanded possibilities.</p>
            </div>

            {/* 6 card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-[33.5px]'>
              <p className='text-[#FFF] font-TTRoundsNeue text-[25px] font-bold leading-[32.5px] xl:pt-[30px] xl:pb-[24px]'>Mini Games</p>
              <p className='text-[#EDEDED] font-inter text-[16px] leading-[26.82px] xl:pb-[30px] xl:max-w-[317px]'>Enjoy entertaining mini-games while
                earning $SPONGE rewards.</p>
            </div>



          </div>

        </div>
      </Container>
    </div>
  );
};

export default NewUtilitiesAwait;
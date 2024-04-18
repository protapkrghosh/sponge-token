import React from 'react';
import Container from '../Container/Container';

const BuySpongeToken = () => {
  return (
    <div className='mt-32'>
      <Container>
        <div>
          <h1 className='text-[#fff] text-[64px] text-center font-TTRoundsNeue font-bold'>How to buy<span className='text-[#FDF44E]'> SPONGE Token</span></h1>

          <div className='md:flex justify-between items-center mt-14'>
            <div className='md:w-1/2'>
              <div className='space-y-7'>
                {/* Card One */}
                <div className='bg-[#0C2251] cusShadow p-8 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>1. Click on Buy Button</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4'>Ready to invest in the next big thing? Head to our buy section now and grab your share of the $SPONGE coin revolution. Don't miss out on the moon ride!</p>
                </div>

                {/* Card Two */}
                <div className='bg-[#0C2251] cusShadow p-8 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>2. Connect your wallet</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4'>Connect your wallet. Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!</p>
                </div>

                {/* Card Three */}
                <div className='bg-[#0C2251] cusShadow p-8 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>3. Choose Amount to Buy</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4'>Choose the amount to buy and join the community!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuySpongeToken;

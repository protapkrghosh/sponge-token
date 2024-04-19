import React from 'react';
import Container from '../Container/Container';

const Roadmap = () => {
  return (
    <div className='bg-[#061C4C] mt-32'>
      <Container>
        <div className='pt-20 pb-24'>
          <h1 className='text-[#fff] text-[64px] text-center font-TTRoundsNeue font-bold'>Road<span className='text-[#FDF44E]'>map</span></h1>


          {/* All Phase Card */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 xl:gap-x-7 mt-16'>
            {/* Phase One */}
            <div>
              <div className='flex justify-center -mb-6'>
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[28px] font-bold font-TTRoundsNeue'>PHASE 1</p>
                </div>
              </div>

              <div className='text-white font-poppins xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-8 py-10'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Launch on Solana</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Website Landing Page</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Presale</p>
                </div>
              </div>
            </div>

            {/* Phase Two */}
            <div>
              <div className='flex justify-center -mb-6'>
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[28px] font-bold font-TTRoundsNeue'>PHASE 2</p>
                </div>
              </div>

              <div className='text-white font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-4 xl:pl-8 py-10'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Public Presale</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Dexscreener and Birdseye Update</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Build Community</p>
                </div>
              </div>
            </div>

            {/* Phase Three */}
            <div>
              <div className='flex justify-center -mb-6'>
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[28px] font-bold font-TTRoundsNeue'>PHASE 3</p>
                </div>
              </div>

              <div className='text-white font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-4 xl:pl-8 py-10'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>Trending on X</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>CG CMC Listing</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#FDF44E] rounded-full mr-3' />
                  <p>First utility release</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;

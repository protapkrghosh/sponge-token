import React from 'react';
import Container from '../Container/Container';

const Roadmap = () => {
  return (
    <div className='bg-[#061C4C]' id='roadmap'>
      <Container>
        <div className='pt-20 pb-24'>
          <h1 className='text-[#fff] text-[40px] lg:text-[50px] xl:text-[64px] text-center font-TTRoundsNeue font-bold' data-aos="fade-up" data-aos-duration="1000">Road<span className='text-[#FDF44E]'>map</span></h1>


          {/* All Phase Card */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-0 md:gap-x-6 gap-x-4 xl:gap-x-7 mt-14 xl:mt-16'>
            {/* Phase One */}
            <div>
              <div className='flex justify-center -mb-5 xl:-mb-6' data-aos="zoom-in" data-aos-duration="800">
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[23px] xl:text-[28px] font-bold font-TTRoundsNeue'>PHASE 1</p>
                </div>
              </div>

              <div className='text-white font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-6 lg:pl-4 xl:pl-8 py-10'>
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
              <div className='flex justify-center -mb-5 xl:-mb-6' data-aos="zoom-in" data-aos-duration="1000">
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[23px] xl:text-[28px] font-bold font-TTRoundsNeue'>PHASE 2</p>
                </div>
              </div>

              <div className='text-white font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-6 lg:pl-4 xl:pl-8 py-10'>
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
              <div className='flex justify-center -mb-5 xl:-mb-6' data-aos="zoom-in" data-aos-duration="1200">
                <div className='bg-[#132856] cusShadow w-fit px-7 py-1 rounded-[10px]'>
                  <p className='text-white text-[23px] xl:text-[28px] font-bold font-TTRoundsNeue'>PHASE 3</p>
                </div>
              </div>

              <div className='text-white font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[18px] bg-[#0C2251] cusShadow rounded-[15px] pl-6 lg:pl-4 xl:pl-8 py-10'>
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

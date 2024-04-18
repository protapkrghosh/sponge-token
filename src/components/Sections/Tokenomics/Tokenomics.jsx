import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import Container from '../Container/Container';

const Tokenomics = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className='md:flex justify-between'>
          <div className='md:w-1/2'>
            <h1 className='text-[#fff] text-[64px] font-TTRoundsNeue font-bold mb-9'>Tokeno<span className='text-[#FDF44E]'>mics</span></h1>

            <div className='space-y-7'>
              {/* Liquidity */}
              <div className='flex items-center'>
                <div className='bg-[#fdf44e] w-10 h-10 flex justify-center items-center rounded-full'>
                  <IoMdCheckmark className='text-[#b1ab37] text-[22px]' />
                </div>

                <p className='text-white text-[28px] font-bold font-poppins ml-6'>Liquidity <span className='text-[32px] ml-3'>35%</span></p>
              </div>

              {/* Team */}
              <div className='flex items-center'>
                <div className='bg-[#c060a1] w-10 h-10 flex justify-center items-center rounded-full'>
                  <IoMdCheckmark className='text-[#fff] text-[22px]' />
                </div>

                <p className='text-white text-[25px] font-bold font-poppins ml-6'>Team <span className='text-[32px] ml-3'>5%</span></p>
              </div>

              {/* Future development */}
              <div className='flex items-center'>
                <div className='bg-[#0147f7] w-10 h-10 flex justify-center items-center rounded-full'>
                  <IoMdCheckmark className='text-[#fff] text-[22px]' />
                </div>

                <p className='text-white text-[25px] font-bold font-poppins ml-6'>Future development <span className='text-[32px] ml-3'>10%</span></p>
              </div>

              {/* Staking  rewards */}
              <div className='flex items-center'>
                <div className='bg-[#2bbf7f] w-10 h-10 flex justify-center items-center rounded-full'>
                  <IoMdCheckmark className='text-[#fff] text-[22px]' />
                </div>

                <p className='text-white text-[25px] font-bold font-poppins ml-6'>Staking  rewards <span className='text-[32px] ml-3'>20%</span></p>
              </div>

              {/* Presale */}
              <div className='flex items-center'>
                <div className='bg-[#6d67e4] w-10 h-10 flex justify-center items-center rounded-full'>
                  <IoMdCheckmark className='text-[#fff] text-[22px]' />
                </div>

                <p className='text-white text-[25px] font-bold font-poppins ml-6'>Presale <span className='text-[32px] ml-3'>30%</span></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;

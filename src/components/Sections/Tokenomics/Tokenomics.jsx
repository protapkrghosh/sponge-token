import React, { useEffect, useRef } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import Container from '../Container/Container';
import Chart from 'chart.js/auto';

const Tokenomics = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        // labels: [
        //   'red',
        //   'blue',
        //   'green',
        //   'yellow',
        // ],

        datasets: [{
          // data: [30, 45, 25, 66, 35],

          backgroundColor: [
            'rgb(255, 25, 255)',
            'rgb(255, 255, 95)',
            'rgb(25, 180, 255)',
            'rgb(55, 205, 86)',
            'rgb(255, 05, 36)',
          ],

          borderWidth: [0],
        }],
      },

      options: {
        plugins: {
          legend: {
            labels: {
              boxWidth: 50,
              boxHeight: 20
            }
          }
        }
      }
    });


    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }
  }, [])

  return (
    <div className='pt-20' id='tokenomics'>
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


          {/* Pie chart area */}
          <div>
            <canvas ref={chartRef} style={{ width: '300px', height: '300px' }} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;

import React from 'react';
import { Link } from 'react-scroll';
import logo from "@/assets/banner/logo.png"
import { PiTelegramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Container from '@/components/Sections/Container/Container';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#112344] to-[#172844]'>
      <Container>
        <div className=''>
          <div className="">
            <div className='lg:flex justify-between items-center py-6'>
              <Link to="home" smooth={true} offset={-30} duration={600} className='cursor-pointer'>
                <img src={logo} alt="Image" className='w-[50px]' />
              </Link>

              {/* Menu */}
              <div>
                <ul className='lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-10 my-5 lg:my-0'>
                  <li>
                    <Link to="home" smooth={true} offset={-30} duration={600} className="text-[16px] text-[#FDF44E] font-inter cursor-pointer">Home</Link>
                  </li>

                  <li>
                    <Link to="about" smooth={true} offset={-30} duration={600} className="text-[16px] text-[#fff] hover:text-[#FDF44E] font-inter duration-300 cursor-pointer">About</Link>
                  </li>

                  <li>
                    <Link to="tokenomics" smooth={true} offset={-30} duration={600} className="text-[16px] text-[#fff] hover:text-[#FDF44E] font-inter duration-300 cursor-pointer">Tokenomics</Link>
                  </li>

                  <li>
                    <Link to="buy" smooth={true} offset={-30} duration={600} className="text-[16px] text-[#fff] hover:text-[#FDF44E] font-inter duration-300 cursor-pointer">How to buy</Link>
                  </li>

                  <li>
                    <Link to="roadmap" smooth={true} offset={-30} duration={600} className="text-[16px] text-[#fff] hover:text-[#FDF44E] font-inter duration-300 cursor-pointer">Roadmap</Link>
                  </li>
                </ul>
              </div>

              {/* Action button */}
              <div className='flex items-center'>
                <a href="https://t.me/solanasponge" target='_blank' className='border-2 border-[#FDF44E] rounded-[10px] hover:bg-[#1c325f] text-white mr-4 p-4 duration-300'>
                  <PiTelegramLogoThin className='text-[23px]' />
                </a>

                <a href="https://twitter.com/SolanaSponge" target='_blank' className='border-2 border-[#FDF44E] rounded-[10px] hover:bg-[#1c325f] text-white p-4 duration-300'>
                  <FaXTwitter className='text-[23px]' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import aboutPath from '@/assets/aboutUs/overlay.png'
import aboutKids from '@/assets/aboutUs/My_Kids_Learned.png'
import clipBgBorder from '@/assets/aboutUs/Rectangle 8818.png'
import ellipse from '@/assets/banner/Ellipse 2.png'
import arrowImg from "@/assets/banner/Group 10.png"
import logoImg from "@/assets/banner/logo.png"
import pathImg from '@/assets/banner/bgShape.png'
import shapeImg from '@/assets/banner/Ellipse 482.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Progress } from "@/components/ui/progress"
import { Link } from 'react-scroll'
import { useRef } from 'react';

const Banner = () => {
  const solInput = useRef(null);

  const [presalePercentage, setPresalePercentage] = useState(2);

  // Dynamic timer
  const calculateTimeLeft = () => {
    const difference = +new Date("2055-04-12") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),

      };
    }

    // Pad numbers with leading zeros
    Object.keys(timeLeft).forEach(interval => {
      timeLeft[interval] = timeLeft[interval].toString().padStart(2, '0');
    });

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setPresalePercentage(99 - timeLeft.hours * 1.2);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="relative md:ml-2 mt-6 md:mt-9 mb-8 md:mb-9">
        <span className="bg-[#1a2f5b] cusShadow px-4 py-3 mx-3 font-bold text-lg md:text-[32px] rounded-[10px]">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[16px] uppercase absolute top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });

  const [solValue, setSolValue] = useState(0.5); // Initialize solValue with a default value of 0.5


  useEffect(() => {
    const solInput = document.getElementById('myInput');
    const satInput = document.getElementById('satInput');

    const handleChange = () => {
      let solValue = parseFloat(solInput.value);

      if (isNaN(solValue) || solValue < 0.5) {
        solValue = 0.5;
      }

      setSolValue(solValue);

      // Calculate SAT value and update SAT input field
      let satValue = solValue / 0.0001;
      satInput.value = isNaN(satValue) ? '0' : satValue.toFixed(0);
    };

    const handleBlur = () => {
      let solValue = parseFloat(solInput.value);

      if (isNaN(solValue) || solValue < 0.5) {
        solInput.value = '0.5';
      }
    };

    if (solInput) {
      solInput.addEventListener('input', handleChange);
      solInput.addEventListener('blur', handleBlur);
    }

    return () => {
      if (solInput) {
        solInput.removeEventListener('input', handleChange);
        solInput.removeEventListener('blur', handleBlur);
      }
    };
  }, []);


  return (
    <div>
      <div className='relative overflow-hidden' id='home'>
        {/* Shadow and background */}
        <div className='h-[175vh] md:h-[265vh] lg:h-[185vh] xl:h-[160vh] 2xl:h-[130vh]'>
          {/* <img src={moonImg} alt="Image" className='absolute top-0 -mt-20 w-full' /> */}
          <div className='pathShadow xl:w-[400px] 2xl:w-[450px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
          {/* <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full' /> */}
          <img src={pathImg} alt="Image" className='absolute top-0 left-0' />
        </div>

        <div className='absolute top-12 md:top-32 lg:top-16 w-full'>
          <Container>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
              <div className='lg:w-1/2 mt-24 lg:mt-0'>
                <h1 className='text-[50px] md:text-[46px] lg:text-[50px] xl:text-[50px] 2xl:text-[54px] text-white text-center lg:text-start font-TTRoundsNeue font-extrabold tracking-wider uppercase'>Aye-aye, captain! Buy some <span className='text-[#FDF44E]'>$SPONGE!</span></h1>

                <div className='md:text-[18px] text-white font-poppins text-center lg:text-start lg:w-[90%] xl:w-[80%] 2xl:w-[85%] mt-7 mb-12 space-y-5'>
                  <p>We're thrilled to introduce you to a revolutionary digital asset built on the Solana blockchain: the $SPONGE coin.</p>

                  <p>Innovation, efficiency, and sustainability in the ever-evolving world of decentralized finance. With lightning-fast transaction speeds and minimal fees.</p>
                </div>

                <div className='flex justify-center lg:justify-start space-x-5'>
                  <Link to="home" smooth={true} offset={-30} duration={600}>
                    <button className="text-[#000] hover:text-[#fff] bg-[#FDF44E] hover:bg-transparent border-2 border-transparent hover:border-[#FDF44E] rounded-full group cursor-pointer px-12 py-[14px] duration-300">
                      <span className="flex justify-center items-center">
                        <p className='text-[18px] 2xl:text-[19px] font-poppins font-semibold mr-2'>Buy now</p>
                      </span>
                    </button>
                  </Link>

                  <Link to="home" smooth={true} offset={-30} duration={600}>
                    <button className="text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-transparent border-2 border-transparent hover:border-[#fff] rounded-full group cursor-pointer px-12 py-[14px] duration-300">
                      <span className="flex justify-center items-center">
                        <p className='text-[18px] 2xl:text-[19px] font-poppins font-semibold mr-2'>Telegram</p>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Presale ends in card section */}
              <div className='w-full lg:w-1/2 xl:-mr-5 2xl:-mr-24'>
                {/* Progress card */}
                <div className='max-w-[528px] mx-auto'>

                  {/* Counter timer */}
                  {
                    timerComponents.length ? (
                      <div className='bg-[#051945] border border-[#FDF44E] rounded-[15px] backdrop-blur-[18px] pt-4 pb-6'>
                        <p className='text-[30px] text-center text-white font-bold font-TTRoundsNeue uppercase tracking-widest'>PRESALE ENDS IN</p>

                        {/* Dynamic Timer */}
                        <div className='relative'>
                          <div className='text-[#F5F6F7] flex justify-center'>
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                          </div>

                          <div className='relative'>
                            <div className='text-white uppercase text-[12px] md:text-[15px] flex justify-center gap-x-7 md:gap-x-[45px] absolute -top-2 left-[82px] md:left-[139px] lg:left-[100px] xl:left-[139px]'>
                              <p>Hours</p>
                              <p>Minutes</p>
                              <p>seconds</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ('')
                  }



                  {/* Content Card */}
                  <div className='mt-5'>
                    <div className='bg-[#051945] border border-[#FDF44E] rounded-[15px] backdrop-blur-[18px] px-6 py-5'>
                      <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Token Name:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>Sponge</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Presale Price:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>$0.0001</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Launch Price:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>$0.0003</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Presale Bonus:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>15%</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Max Buy:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>25 SOL</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Min Buy:</p>
                          <p className='text-[#FDF44E] font-semibold uppercase'>0.5 SOL</p>
                        </div>
                      </div>

                      {/* Presale sold */}
                      <div className='rounded-[8px] mt-3'>
                        <div className='bg-[#0C2251] cusShadow rounded-[8px] px-3 pt-1 pb-2'>
                          <div className='flex justify-between items-center'>
                            <p className='text-white'>Presale sold</p>
                            <p className='text-[#FDF44E] font-semibold'>87%</p>
                          </div>

                          {/* <Slider defaultValue={[50]} max={100} step={5} className="my-3 cursor-pointer" /> */}
                          <Progress value={presalePercentage} className="mt-1" />
                        </div>
                      </div>

                      <div className='flex justify-between mt-6 mb-3'>
                        <p className='text-white font-inter font-normal'>Amount in SOL you pay:</p>
                        {/* <div className='flex items-center'>
                        <img src={walletImg} alt="Image" />
                        <p className='text-white font-normal ml-1'>0.00 SOL</p>
                      </div> */}
                      </div>

                      {/* SOL Input */}
                      <div className='relative'>
                        <div className='flex items-center absolute mt-[4px] bg-[#15274d] cusShadow px-4 py-1 ml-2 rounded-[8px]'>
                          <img src={ellipse} alt="Image" className='w-[32px] rounded-full' />
                          <p className='text-white font-inter font-normal ml-2 uppercase'>SOL</p>
                        </div>

                        {/* SOL input filed */}
                        <div className='rounded-[5px]'>
                          <Input id="myInput" placeholder="0.00" className="text-white placeholder:text-white placeholder:text-opacity-65 text-end border-none bg-[#0C2251] cusShadow rounded-[5px]" />
                        </div>
                      </div>

                      {/* custom range button */}
                      <div className='relative mt-7 mb-2'>
                        <div className='h-[2.5px] bg-[#FDF44E] rounded-[70px] mt-[6px]' />

                        <div>
                          <button className='cursor-default'>
                            <img src={arrowImg} alt="Image" className='w-[35px] absolute top-[-16px] left-[45%] md:left-[47%]' />
                          </button>
                        </div>
                      </div>

                      {/* Sponge Input filed */}
                      <div>
                        <p className='text-white font-inter font-normal mb-2'>Amount in SPO you receive:</p>

                        <div className='relative'>
                          <div className='flex items-center absolute mt-[5px] bg-[#15274d] cusShadow px-4 py-1 ml-2 rounded-[8px]'>
                            <img src={logoImg} alt="Image" className='w-[32px]' />
                            <p className='text-white font-inter font-normal ml-2 uppercase'>Sponge</p>
                          </div>


                          {/* Sponge input filed  */}
                          <div className='rounded-[5px]'>
                            <Input id="satInput" readOnly className="text-white placeholder:text-white text-end border-none bg-[#0C2251] cusShadow rounded-[5px]" />
                          </div>
                        </div>
                      </div>

                      {/* Connect Wallet */}
                      <Button className="w-full bg-[#FDF44E] hover:bg-[#051945] text-black hover:text-white text-[18px] font-bold font-TTRoundsNeue rounded-[10px] px-12 py-6 mt-6 duration-300" userInput={solInput}> Connect Wallet </Button>

                      {/* <SendSolForm userInput={solValue}> Connect Wallet </SendSolForm> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>


      {/* About us */}
      <div>
        <Container>
          <div className=''>
            <div className='-mb-[460px] 2xl:-mb-[520px]'>
              <img src={clipBgBorder} alt="Image" className='w-full h-[540px]'/>
            </div>

            <div className='md:flex justify-between items-center px-10'>
              <div className='md:w-1/2'>
                <h1 className='text-white text-[70px] font-bold font-TTRoundsNeue uppercase'>Abo<span className='text-[#FDF44E]'>ut us</span></h1>

                <div className='text-[#fff] text-[18px] font-poppins space-y-4 mt-6'>
                  <p>Welcome to Sponge coin, where innovation meets opportunity. As a leading player in the burgeoning world of decentralized finance (DeFi), Sponge coin is committed to pioneering solutions that empower individuals and communities worldwide.</p>

                  <p>Our mission is to democratize access to financial services by leveraging the unparalleled speed and scalability of the Solana blockchain. With a team of dedicated experts and a vision for a more inclusive financial landscape, Sponge coin is poised to redefine the way we transact...</p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-end'>
                <img src={aboutKids} alt="Image" className='w-[75%] 2xl:w-[70%] mt-10 2xl:mt-24'/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

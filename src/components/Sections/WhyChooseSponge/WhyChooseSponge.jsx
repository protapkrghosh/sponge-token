import Container from '../Container/Container';
import whyChooseImg from '@/assets/WhyChooseSPONGE/Group 1000003561.png';
import solanaImg from '@/assets/WhyChooseSPONGE/Group 1000003522.png';
import communityImg from '@/assets/WhyChooseSPONGE/Black.png';
import borderShadowImg from '@/assets/WhyChooseSPONGE/div.elementor-background-overlay.png';

const WhyChooseSPONGE = () => {
  return (
    <div className='xl:my-[140px]'>
      <Container>
        {/* main section position */}
        <div className='lg:flex lg:gap-[50px]'>

          <div className='bg-[#071D4C] rounded-[20px] xl:w-1/2'>
            <p className='text-center text-[#FFF] font-TTRoundsNeue xl:text-[50px] font-bold xl:leading-[65px] xl:mt-[62.5px] xl:mb-[30px]'>Why Choose <span className='text-[#FDF44E]'>SPONGE</span></p>
            <img className='2xl:w-[65%] xl:w-[78%] mx-auto xl:mb-[56.89px]' src={whyChooseImg} alt="image" />
          </div>

          <div className='xl:w-1/2'>
            {/* left side first card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-10 xl:mb-[32px] relative'>
              <img className='xl:w-auto absolute xl:right-16 xl:top-12' src={borderShadowImg} alt="image" />
              <img className='xl:pt-[40px] xl:pb-[24px]' src={solanaImg} alt="image" />
              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] font-bold leading-[32.5px]'>Solana's Speed</p>
              <p className='text-[#FFF] font-inter lg:text-[18px] lg:leading-[28.8px] xl:pt-[16px] xl:pb-[46px] max-w-[518px]'>Take advantage of Solana's rapid transaction speed as
                $SPONGE ensures swift and seamless transactions.</p>
            </div>
            {/* right side second card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-10 relative'>
              <img className='xl:w-auto absolute xl:right-16 xl:top-12' src={borderShadowImg} alt="image" />
              <img className='xl:pt-[40px] xl:pb-[24px]' src={communityImg} alt="image" />
              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] font-bold leading-[32.5px]'>Community-Focused</p>
              <p className='text-[#FFF] font-inter lg:text-[18px] lg:leading-[28.8px] xl:pt-[16px] xl:pb-[46px] max-w-[488px]'>More than a simple coin, $SPONGE thrives on community
                engagement. Join us as we create a dynamic space for
                $SPONGE enthusiasts.</p>
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
};

export default WhyChooseSPONGE;
import Container from '../Container/Container';
import whyChooseImg from '@/assets/WhyChooseSPONGE/Group 1000003561.png';
import solanaImg from '@/assets/WhyChooseSPONGE/Group 1000003522.png';
import communityImg from '@/assets/WhyChooseSPONGE/Black.png';
import borderShadowImg from '@/assets/WhyChooseSPONGE/div.elementor-background-overlay.png';

const WhyChooseSPONGE = () => {
  return (
    <div className='xl:mt-[140px] lg:mt-[120px] md:mt-[100px] mt-[80px]'>
      <Container>
        {/* main section position */}
        <div className='lg:flex lg:gap-[30px]'>

          <div className='bg-[#071D4C] rounded-[20px] lg:w-1/2'>
            <h1 className='text-center text-[#FFF] font-TTRoundsNeue xl:text-[50px] lg:text-[35px] md:text-[38px] text-[30px] font-bold xl:leading-[65px] xl:pt-[62.5px] lg:pt-[62px] md:pt-[40px] pt-[35px] lg:pb-[30px] md:pb-[25px] pb-[25px]' data-aos="fade-up" data-aos-duration="1000">Why Choose <span className='text-[#FDF44E]'>SPONGE</span></h1>

            <img className='2xl:w-[65%] xl:w-[78%] lg:w-[84%] md:w-[50%] w-[80%] mx-auto xl:pb-[56.89px] lg:pb-[50px] md:pb-[40px] pb-[35px]' src={whyChooseImg} alt="image" data-aos="fade-up" data-aos-duration="1200" />
          </div>

          <div className='lg:w-1/2'>
            {/* left side first card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-10 lg:pl-[30px] pl-[25px] lg:mb-[32px] relative'>
              <img className='lg:block hidden xl:w-auto absolute xl:right-16 xl:top-12' src={borderShadowImg} alt="image" />

              <img className='xl:w-auto lg:w-[25%] xl:pt-[40px] lg:pt-[30px] pt-[30px] xl:pb-[24px] lg:pb-[20px] pb-[20px]' src={solanaImg} alt="image" data-aos="fade-up" data-aos-duration="1000" />

              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] lg:text-[22px] text-[20px] font-bold leading-[32.5px]'>Solana's Speed</p>

              <p className='text-[#FFF] font-inter lg:text-[18px] text-[14px] lg:leading-[28.8px] xl:pt-[16px] lg:pt-[15px] xl:pb-[46px] lg:pb-[30px] pb-[25px] 2xl:w-[85%] xl:w-[94%] z-40'>Take advantage of Solana's rapid transaction speed as
                $SPONGE ensures swift and seamless transactions.</p>
            </div>

            {/* right side second card  */}
            <div className='bg-[#071D4C] rounded-[20px] xl:pl-10 lg:pl-[30px] pl-[25px] relative'>
              <img className='lg:block hidden xl:w-auto absolute xl:right-16 xl:top-12' src={borderShadowImg} alt="image" />

              <img className='xl:w-auto lg:w-[25%] xl:pt-[40px] lg:pt-[30px] pt-[30px] xl:pb-[24px] lg:pb-[20px] pb-[20px]' src={communityImg} alt="image" data-aos="fade-up" data-aos-duration="1000" />

              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] lg:text-[22px] text-[20px] font-bold leading-[32.5px]'>Community-Focused</p>

              <p className='text-[#FFF] font-inter lg:text-[18px] text-[14px] lg:leading-[28.8px] xl:pt-[16px] xl:pb-[46px] lg:pb-[30px] pb-[25px] 2xl:w-[95%] xl:w-[96%] z-40'>More than a simple coin, $SPONGE thrives on community
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
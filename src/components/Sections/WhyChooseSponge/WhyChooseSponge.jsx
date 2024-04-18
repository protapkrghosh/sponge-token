import Container from '../Container/Container';
import solanaImg from '@/assets/WhyChooseSPONGE/Group 1000003522.png';
import communityImg from '@/assets/WhyChooseSPONGE/Black.png';

const WhyChooseSPONGE = () => {
  return (
    <div className='2xl:mb-[140px]'>
      <Container>
        {/* main section position */}
        <div>

          <div className='border'>
            <p className='text-[#FFF] font-TTRoundsNeue xl:text-[50px] font-bold xl:leading-[65px]'>Why Choose <span className='text-[#FDF44E]'>SPONGE</span></p>
          </div>

          <div>
            {/* left side first card  */}
            <div className='border'>
              <img src={solanaImg} alt="image" />
              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] font-bold leading-[32.5px]'>Solana's Speed</p>
              <p className='text-[#FFF] font-inter lg:text-[18px] lg:leading-[28.8px]'>Take advantage of Solana's rapid transaction speed as
                $SPONGE ensures swift and seamless transactions.</p>
            </div>
            {/* right side second card  */}
            <div className='border'>
              <img src={communityImg} alt="image" />
              <p className='text-[#FFF] font-TTRoundsNeue xl:text-[25px] font-bold leading-[32.5px]'>Community-Focused</p>
              <p className='text-[#FFF] font-inter lg:text-[18px] lg:leading-[28.8px]'>More than a simple coin, $SPONGE thrives on community
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
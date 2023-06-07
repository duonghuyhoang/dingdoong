function Footer() {
  return (
    <footer className=' w-[1060px]  h-[400px] mx-auto bg-white '>
      <div className='flex flex-col justify-center items-center gap-14'>
        <div className='flex flex-col justify-center items-center mt-[70px] gap-3'>
          <div className='font-bold text-[30px] leading-5 tracking-wide  text-[#1D2461]'>
            Keep in touch!
          </div>
          <div className='font-normal text-[16px] leading-5 tracking-wide  text-[#0E1557]'>
            Keep follow us to get updates on the app and its upcoming features
          </div>
        </div>
        <div className='flex  justify-center items-center gap-12 '>
          <a href='https://www.facebook.com/DingDoong-Delivery-Pickup-110058535114775/'>
            <div className=' w-[50px] h-[50px] bg-[url("../assests/img/image23.png")]  bg-cover bg-no-repeat '></div>
          </a>
          <a href=''>
            <div className='w-[52.76px] h-[35.88px] bg-[url("../assests/img/image24.png")]  bg-cover bg-no-repeat'></div>
          </a>
          <a href=''>
            <div className='w-[50px] h-[50px] bg-[url("../assests/img/image25.png")]  bg-cover bg-no-repeat'></div>
          </a>
          <a href='https://www.instagram.com/dingdoong.io/'>
            <div className='w-[50px] h-[52.46px] bg-[url("../assests/img/image26.png")]  bg-cover bg-no-repeat'></div>
          </a>
          <a href=''>
            <div className='w-[50px] h-[50px] bg-[url("../assests/img/Twitter.png")]  bg-cover bg-no-repeat'></div>
          </a>
          <a href='https://apps.shopify.com/delivery-date-omega'>
            <div className='w-[60px] h-[68.8px] bg-[url("../assests/img/image28.png")]  bg-cover bg-no-repeat'></div>
          </a>
        </div>
        <div>
          <a
            href='mailto:contact@omegatheme.com'
            className='flex flex-col justify-center items-center'
          >
            <div className='font-normal text-[16px] leading-5 tracking-wide  text-[#0E1557]'>
              Don't hesitate to contact us.
            </div>
            <div className='font-normal text-[16px] leading-5 tracking-wide  text-[#0E1557]'>
              There's always a room for improvement, we are all ear to any of
              your ideas.
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
